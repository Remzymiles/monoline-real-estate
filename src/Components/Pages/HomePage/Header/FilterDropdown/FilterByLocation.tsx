import { useState } from "react";
import cities from "../../../../../base/dummyData/propertyCities.json";
import states from "../../../../../base/dummyData/propertyStates.json";
import { useFilterStore } from "../../../../../base/store/useFilterStore";
import { ChevronArrowDown } from "../../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../../Icons/ChevronArrowUp";

export const FilterByLocation = () => {
  //
  const [isCitiesDropDownOpen, setIsCitiesDropDownOpen] = useState(false);
  const [isStatesDropDownOpen, setIsStatesDropDownOpen] = useState(false);

  const { updateFilterOptions, filterOptions } = useFilterStore((state) => ({
    updateFilterOptions: state.updateFilterOptions,
    filterOptions: state.filterOptions,
  }));


  return (
    <>
      <div>
        <div className="mb-5 mt-1">
          <h1 className="capitalize text-xl font-extrabold">property city</h1>
          <p className="text-sm mt-2">search for a property by its city</p>
          <div className="mt-3 relative z-30">
            <button
              className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize text-start flex justify-between"
              onClick={() => setIsCitiesDropDownOpen(!isCitiesDropDownOpen)}
            >
              {filterOptions.selectedCity
                ? filterOptions.selectedCity
                : "choose city"}{" "}
              <span>
                {isCitiesDropDownOpen ? (
                  <ChevronArrowDown />
                ) : (
                  <ChevronArrowUp />
                )}
              </span>
            </button>

            <div
              className={`flex-col items-start mt-1 rounded-lg border absolute bg-white border-black mobile:w-full w-[500px] transition-all duration-300 ${
                isCitiesDropDownOpen ? "h-[367px]" : "h-0 opacity-0 invisible"
              }`}
            >
              {cities.map((city, index) => (
                <button
                  key={city.id}
                  className={`px-3 py-3 w-full text-start ${
                    index === cities.length - 1 ? "border-none" : "border-b border-b-black"
                  }`}
                  onClick={() => {
                    updateFilterOptions(city.city, "city");
                    setIsCitiesDropDownOpen(false);
                  }}
                >
                  {city.city}
                </button>
              ))}
            </div>
          </div>
        </div>
        <hr />

        {/*  */}
        <div className="mb-5 mt-2">
          <h1 className="capitalize text-xl font-extrabold">property state</h1>
          <p className="text-sm mt-2">search for a property by its state</p>
          <div className="mt-3 relative">
            <button
              className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize text-start flex justify-between"
              onClick={() => setIsStatesDropDownOpen(!isStatesDropDownOpen)}
            >
              {filterOptions.selectedState
                ? filterOptions.selectedState
                : "choose state"}{" "}
              <span className={`transition-all duration-1000`}>
                {isStatesDropDownOpen ? (
                  <ChevronArrowDown />
                ) : (
                  <ChevronArrowUp />
                )}
              </span>
            </button>
            <div
              className={`flex-col items-start mt-1 rounded-lg border border-black mobile:w-full w-[500px] absolute z-10 bg-white transition-all duration-300 ${
                isStatesDropDownOpen ? "h-[245px]" : "h-0 opacity-0 invisible"
              }`}
            >
              {states.map((state, index) => (
                <button
                  key={index}
                  className={`px-3 py-3 w-full text-start ${
                    index === states.length - 1 ? "" : "border-b border-b-black"
                  }`}
                  onClick={() => {
                    updateFilterOptions(state.name, "state");
                    setIsStatesDropDownOpen(false);
                  }}
                >
                  {state.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <hr />
        {/*  */}
      </div>
    </>
  );
};
