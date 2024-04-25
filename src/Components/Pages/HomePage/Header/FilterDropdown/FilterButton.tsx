import { createContext } from "react";
import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { SettingsIcon } from "../../../../Icons/SettingsIcon";
import { XIcon } from "../../../../Icons/XIcon";
import { FilterDropdownContents } from "./FilterDropdownContents";

export const closeFilterModalContext = createContext<any>(() => {});
//
export const FilterButton = () => {
  const { isVisible, openDropDown, dropdownRef, closeDropDown } =
    useHandleUserProfileDropdown();
  //

  return (
    <closeFilterModalContext.Provider value={closeDropDown}>
      <div>
        <button
          className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
          onClick={() => {
            openDropDown();
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
                <XIcon clicked={closeDropDown} extraStyle="text-sm" />
              </div>
              <div className="flex-grow">filters</div>
            </div>
            <hr />
            <FilterDropdownContents />
          </div>
        </div>
      </div>
    </closeFilterModalContext.Provider>
  );
};
