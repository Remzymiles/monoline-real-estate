import { createContext, useContext, useState } from "react";
import { useFilterStore } from "../../../../base/store/useFilterStore";
import { closeFilterModalContext } from "./FilterButton";
import { FilterByBedsAndBaths } from "./FilterByBedsAndBaths";
import { FilterByLocation } from "./FilterByLocation";
import { FilterByPrice } from "./FilterByPrice";

export const UseFilterContext = createContext<any>({});
export const FilterDropdownContents = () => {
  //
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isCitiesDropDownOpen, setIsCitiesDropDownOpen] = useState(false);
  const [isStatesDropDownOpen, setIsStatesDropDownOpen] = useState(false);
  //
  const [selectedBeds, setSelectedBeds] = useState(0);
  const [selectedBaths, setSelectedBaths] = useState(0);
  //
  const [isPricesDropDownOpen, setIsPricesDropDownOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<
    { min: number; max: number } | string
  >("");
  //
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCitiesDropDownOpen(false);
  };

  const handleStateSelect = (stateName: string) => {
    setSelectedState(stateName);
    setIsStatesDropDownOpen(false);
  };

  //
  const { updateFilterOptions, clearFilterOptions } = useFilterStore(
    (state) => ({
      updateFilterOptions: state.updateFilterOptions,
      clearFilterOptions: state.clearFilterOptions,
      filterOptions: state.filterOptions,
    })
  );
  //
  const closeFilterModal = useContext(closeFilterModalContext);
  //

  return (
    <>
      <div className="px-4 max-h-[92%] big-screen-mobile-below:max-h-[86%] pb-16 overflow-y-scroll z-20">
        {/*  */}
        <FilterByLocation
          handleCitySelect={handleCitySelect}
          handleStateSelect={handleStateSelect}
          isCitiesDropDownOpen={isCitiesDropDownOpen}
          isStatesDropDownOpen={isStatesDropDownOpen}
          selectedCity={selectedCity}
          selectedState={selectedState}
          setIsCitiesDropDownOpen={setIsCitiesDropDownOpen}
          setIsStatesDropDownOpen={setIsStatesDropDownOpen}
        />
        {/*  */}
        <FilterByPrice
          isPricesDropDownOpen={isPricesDropDownOpen}
          selectedPrice={selectedPrice}
          setIsPricesDropDownOpen={setIsPricesDropDownOpen}
          setSelectedPrice={setSelectedPrice}
        />
        {/*  */}
        <FilterByBedsAndBaths
          selectedBaths={selectedBaths}
          selectedBeds={selectedBeds}
          setSelectedBaths={setSelectedBaths}
          setSelectedBeds={setSelectedBeds}
        />
      </div>
      <div className="absolute mobile:fixed z-50 bg-white bottom-0 border-t border-t-slate-300 w-full items-center pt-2 pb-5 px-4 flex justify-between">
        <button
          className="capitalize font-bold text-lg hover:bg-slate-200 rounded-lg py-2 px-2 transition-colors duration-300"
          onClick={() => {
            clearFilterOptions;
            setSelectedCity("");
            setSelectedState("");
            setSelectedPrice("");
            setSelectedBeds(0);
            setSelectedBaths(0);
          }}
        >
          clear all
        </button>
        <button
          className="capitalize bg-black/85 px-5 py-2 text-white rounded-lg font-bold hover:bg-black transition-colors duration-300"
          onClick={() => {
            closeFilterModal();
            updateFilterOptions(selectedCity, "city");
            updateFilterOptions(selectedState, "state");
            updateFilterOptions(selectedBeds, "bed");
            updateFilterOptions(selectedBaths, "baths");
            updateFilterOptions(selectedPrice, "price");
          }}
        >
          filter
        </button>
      </div>
    </>
  );
};
