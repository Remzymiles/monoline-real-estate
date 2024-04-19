import { useContext } from "react";
import { useFilterStore } from "../../../../../base/store/useFilterStore";
import { FilterByLocation } from "../FilterDropdown/FilterByLocation";
import { closeFilterModalContext } from "./FilterButton";
import { FilterByBedsAndBaths } from "./FilterByBedsAndBaths";
import { FilterByPrice } from "./FilterByPrice";

export const FilterDropdownContents = () => {
  //
  const { updateFilterOptions, clearFilterOptions,filterOptions } = useFilterStore(
    (state) => ({
      updateFilterOptions: state.updateFilterOptions,
      clearFilterOptions: state.clearFilterOptions,
      filterOptions: state.filterOptions
    })
  );
  //
  const closeFilterModal = useContext(closeFilterModalContext);

  return (
    <>
      <div className="px-4 max-h-[90%] pb-16 overflow-y-scroll z-20">
        <FilterByLocation />
        {/*  */}
        <FilterByPrice />
        {/*  */}
        <FilterByBedsAndBaths />
      </div>
      <div className="absolute z-50 bg-white bottom-0 border-t border-t-slate-300 w-full items-center pt-2 pb-5 px-4 flex justify-between">
        <button
          className="capitalize font-bold text-lg hover:bg-slate-200 rounded-lg py-2 px-2 transition-colors duration-300"
          onClick={clearFilterOptions}
        >
          clear all
        </button>
        <button
          className="capitalize bg-black/85 px-5 py-2 text-white rounded-lg font-bold hover:bg-black transition-colors duration-300"
          onClick={() => {
            updateFilterOptions;
            closeFilterModal();
            console.log(filterOptions);
            
          }}
        >
          filter
        </button>
      </div>
    </>
  );
};
