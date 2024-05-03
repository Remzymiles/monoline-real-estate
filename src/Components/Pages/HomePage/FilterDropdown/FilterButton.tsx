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
      <div
        className={`fixed big-screen-mobile-below:top-[140px] laptop:top-[117px] between-mobile-and-tablet:top-[170px] tablet-above:top-[170px] left-0 w-full ${
          isFilterVisible ? "z-40" : "z-20"
        }`}
      >
        <div
          className={`flex justify-between items-center bg-white py-2 border-b-2 laptop-below:py-3 tablet-above:px-8 laptop:px-28 mobile:px-4 tablet:px-8`}
        >
          <p className="text-lg font-light capitalize">Filter properties:</p>
          <button
            className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black laptop-below:translate-y-[5px]"
            onClick={() => {
              handleOpenFilterModal();
            }}
          >
            <SettingsIcon />
            <p className="text-sm big-screen-mobile-below:hidden">Filters</p>
          </button>
        </div>
        {/*  */}
        {isFilterVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <div
              className="mobile:w-full laptop:w-[550px] h-[90%] mobile:h-[100%] mobile:mb-2 mobile:rounded-none rounded-t-xl bg-white"
              ref={filterDropdownRef}
            >
              <div className="text-center capitalize font-extrabold text-lg flex my-3">
                <div className="flex-grow">filters</div>
                <div className="mr-3">
                  <XIcon
                    clicked={handleCloseFilterModal}
                    extraStyle="text-sm"
                  />
                </div>
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
