import { FilterDropdownContents } from "./FilterDropdownContents";
import { SettingsIcon } from "../../../../Icons/SettingsIcon";
import { XIcon } from "../../../../Icons/XIcon";
import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { useIsFilterClicked } from "../../../../../base/hooks/useIsFilterClicked";
// import { useHandleClearFilter } from "../../../../../base/hooks/useHandleClearFilter";
// import { useContext } from "react";
// import { clearLocationFilterContext } from "./FilterByLocation";
// import { useHandleFilterCity } from "../../../../../base/hooks/useHandleFilterCity";
// import { useHandleFilterState } from "../../../../../base/hooks/useHandleFilterState";

export const FilterButton = () => {
  const { isVisible, openDropDown, setIsVisible, dropdownRef } =
    useHandleUserProfileDropdown();
  //
  const { setIsFilterClicked } = useIsFilterClicked();
  //
  // const { handleClearFilter,clearSelectedCity } = useHandleClearFilter();

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
        className={`absolute bg-black/30 w-[100%] h-[100vh] overflow-hidden right-0 top-0 flex justify-center ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <div
          className={`mobile:w-full laptop:w-[550px] h-[95%] mobile:h-[100%] rounded-xl bg-white relative mt-4`}
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
          {/* <div className="absolute tablet-below:mb-3 bg-white bottom-0 border-t border-t-slate-300 w-full items-center py-3 px-4 flex justify-between">
            <button
              className="capitalize font-bold text-lg hover:bg-slate-100 rounded-lg py-2 px-2 transition-colors duration-300"
              onClick={clearSelectedCity}
            >
              clear all
            </button>
            <button className="capitalize bg-black/85 px-5 py-2 text-white rounded-lg font-bold hover:bg-black transition-colors duration-300">
              filter
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
