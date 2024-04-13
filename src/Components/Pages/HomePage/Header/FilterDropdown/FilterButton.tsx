import { FilterDropdownContents } from "./FilterDropdownContents";
import { SettingsIcon } from "../../../../Icons/SettingsIcon";
import { XIcon } from "../../../../Icons/XIcon";
import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { useIsFilterClicked } from "../../../../../base/hooks/useIsFilterClicked";

export const FilterButton = () => {
  const { isVisible, openDropDown, setIsVisible, dropdownRef } =
    useHandleUserProfileDropdown();
  //
  const { setIsFilterClicked } = useIsFilterClicked();
  //

  return (
    <div>
      <button
        className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
        onClick={() => {
          openDropDown();
          setIsFilterClicked(true);
        }}
      >
        <SettingsIcon />
        <p className="font-bold text-sm big-screen-mobile-below:hidden">
          Filters
        </p>
      </button>
      {/*  */}
      <div
        className={`absolute bg-black/30 w-[100%] h-[100vh] overflow-hidden right-0 top-0 flex justify-center items-center ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <div
          className={`w-[40%] h-[90%] rounded-xl bg-white relative`}
          ref={dropdownRef}
        >
          <div className=" text-center capitalize font-extrabold text-lg flex my-3">
            <div className="ml-3">
              <XIcon
                clicked={() => {
                  setIsVisible(false);
                }}
              />
            </div>
            <div className="flex-grow">filters</div>
          </div>
          <hr />
          <FilterDropdownContents />
          <div className="absolute bottom-0 border-t border-t-slate-300 w-full py-5 px-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};
