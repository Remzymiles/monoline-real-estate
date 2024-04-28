import { createContext } from "react";
import { useHandleFilterModal } from "../../../../base/hooks/useHandleFilterModal";
import { SettingsIcon } from "../../../Icons/SettingsIcon";
import { XIcon } from "../../../Icons/XIcon";
import { FilterDropdownContents } from "./FilterDropdownContents";

export const closeFilterModalContext = createContext<any>(() => {});
//
export const FilterButton = () => {
  const {
    isFilterVisible,
    handleOpenFilterModal,
    handleCloseFilterModal,
    filterDropdownRef,
  } = useHandleFilterModal();
  //

  return (
    <closeFilterModalContext.Provider value={handleCloseFilterModal}>
      <div className="fixed top-[117px] laptop-below:top-[168px] left-0 w-full z-20">
        <div className="flex laptop-below:justify-around justify-evenly bg-white py-2 border-b-2">
          <p className="text-lg font-bold capitalize">Filter properties:</p>
          <button
            className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
            onClick={() => {
              handleOpenFilterModal();
            }}
          >
            <SettingsIcon />
            <p className="font-bold text-sm big-screen-mobile-below:hidden">
              Filters
            </p>
          </button>
        </div>
        {/*  */}
        {isFilterVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div
              className="mobile:w-full laptop:w-[550px] h-[95%] mobile:h-[82%] rounded-t-xl bg-white"
              ref={filterDropdownRef}
            >
              <div className="text-center capitalize font-extrabold text-lg flex my-3">
                <div className="ml-3">
                  <XIcon
                    clicked={handleCloseFilterModal}
                    extraStyle="text-sm"
                  />
                </div>
                <div className="flex-grow">filters</div>
              </div>
              <hr />
              <FilterDropdownContents />
            </div>
          </div>
        )}
      </div>
    </closeFilterModalContext.Provider>
  );
};
