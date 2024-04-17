import { useHandleFilterCity } from "../../../../../base/hooks/useHandleFilterCity";
import { useHandleFilterState } from "../../../../../base/hooks/useHandleFilterState";
import PropertyLocations from "../../../../../base/dummyData/properties.json";
import PropertyDetails from "../../../../../base/dummyData/properties.json";
import { ChevronArrowDown } from "../../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../../Icons/ChevronArrowUp";
import { useState } from "react";
import { useHandleFilterPrice } from "../../../../../base/hooks/useHandleFilterPrice";

export const FilterDropdownContents = () => {
  //
  const {
    setIsClickedCity,
    isClickedCity,
    selectedCity,
    handleCityClick,
    setSelectedCity,
  } = useHandleFilterCity();
  //
  const {
    setIsClickedState,
    isClickedState,
    selectedState,
    handleStateClick,
    setSelectedState,
  } = useHandleFilterState();
  //
  const {
    handlePriceClick,
    isClickedPrice,
    selectedPrice,
    setIsClickedPrice,
    clearSelectedPriceRange,
  } = useHandleFilterPrice();

  const [selectedBedIndex, setSelectedBedIndex] = useState(-1);
  const [selectedBathIndex, setSelectedBathIndex] = useState(-1);

  const handleFilterClick = () => {
    const selectedBed =
      selectedBedIndex === -1 ? "Any" : uniqueBeds[selectedBedIndex];
    const selectedBath =
      selectedBathIndex === -1 ? "Any" : uniqueBaths[selectedBathIndex];
    console.log("Selected Beds:", selectedBed);
    console.log("Selected Baths:", selectedBath);
    console.log("Selected City:", selectedCity);
    console.log("Selected State:", selectedState);
    console.log("Selected Price:", selectedPrice);
  };

  const clearSelectedFilters = () => {
    setSelectedBedIndex(-1);
    setSelectedBathIndex(-1);
    clearSelectedPriceRange();
    setSelectedCity("");
    setSelectedState("");
  };

  const handleSelectBedNumber = (index: number) => {
    setSelectedBedIndex(index);
  };
  const handleSelectBathNumber = (index: number) => {
    setSelectedBathIndex(index);
  };

  const uniqueCities: string[] = [];
  const uniqueState: string[] = [];
  const uniqueBeds: number[] = [];
  const uniqueBaths: number[] = [];

  PropertyDetails.forEach((bed) => {
    if (!uniqueBeds.includes(bed.details.beds)) {
      uniqueBeds.push(bed.details.beds);
      uniqueBeds.sort((a, b) => a - b);
    }
  });

  PropertyDetails.forEach((bath) => {
    if (!uniqueBaths.includes(bath.details.baths)) {
      uniqueBaths.push(bath.details.baths);
      uniqueBaths.sort((a, b) => a - b);
    }
  });

  PropertyLocations.forEach((location) => {
    if (!uniqueCities.includes(location.location.city)) {
      uniqueCities.push(location.location.city);
    }
  });
  //

  PropertyLocations.forEach((location) => {
    if (!uniqueState.includes(location.location.state)) {
      uniqueState.push(location.location.state);
    }
  });
  return (
    <>
      <div className="px-4 max-h-[90%] pb-16 overflow-y-scroll">
        <div>
          <div className="mb-5 mt-3">
            <h1 className="capitalize text-xl font-extrabold">property city</h1>
            <p className="text-sm mt-2">search for a property by its city</p>
            <div className="mt-3">
              <button
                className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize focus:font-bold  text-start flex justify-between"
                onClick={() => setIsClickedCity(!isClickedCity)}
              >
                {selectedCity ? selectedCity : "choose city"}{" "}
                <span>
                  {isClickedCity ? <ChevronArrowDown /> : <ChevronArrowUp />}
                </span>
              </button>
              {isClickedCity && (
                <div className="flex flex-col items-start mt-1 rounded-lg border border-black mobile:w-full w-[500px]">
                  {uniqueCities.map((city, index) => (
                    <button
                      key={index}
                      className={`px-3 py-3 w-full text-start ${
                        index === uniqueCities.length - 1
                          ? ""
                          : "border-b border-b-black"
                      }`}
                      onClick={() => handleCityClick(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <hr />
          {/*  */}
          <div className="mb-5 mt-3">
            <h1 className="capitalize text-xl font-extrabold">
              property state
            </h1>
            <p className="text-sm mt-2">search for a property by its state</p>
            <div className="mt-3">
              <button
                className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize focus:font-bold  text-start flex justify-between"
                onClick={() => setIsClickedState(!isClickedState)}
              >
                {selectedState ? selectedState : "choose state"}{" "}
                <span>
                  {isClickedState ? <ChevronArrowDown /> : <ChevronArrowUp />}
                </span>
              </button>
              {isClickedState && (
                <div className="flex flex-col items-start mt-1 rounded-lg border border-black mobile:w-full w-[500px]">
                  {uniqueState.map((state, index) => (
                    <button
                      key={index}
                      className={`px-3 py-3 w-full text-start ${
                        index === uniqueState.length - 1
                          ? ""
                          : "border-b border-b-black"
                      }`}
                      onClick={() => handleStateClick(state)}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <hr />
          {/*  */}
        </div>
        {/*  */}
        <div className="mt-3">
          <h1 className="capitalize text-xl font-extrabold">beds and baths</h1>
          <div className="mt-3">
            <div>
              <h2 className="capitalize mb-2 text-sm">bedrooms</h2>
              <div className="flex gap-2 mobile:overflow-x-auto">
                <div
                  className={`capitalize border rounded-2xl px-4 py-[5px] ${
                    selectedBedIndex === -1
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } hover:border-black`}
                  onClick={() => handleSelectBedNumber(-1)}
                >
                  any
                </div>
                {uniqueBeds.map((bed, index) => (
                  <div
                    key={index}
                    className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                      selectedBedIndex === index
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handleSelectBedNumber(index)}
                  >
                    {bed}
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="my-6">
              <h2 className="capitalize mb-2 text-sm">bathrooms</h2>
              <div className="flex gap-2 mobile:overflow-x-auto">
                <div
                  className={`capitalize border rounded-2xl px-4 py-[5px] ${
                    selectedBathIndex === -1
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } hover:border-black`}
                  onClick={() => handleSelectBathNumber(-1)}
                >
                  any
                </div>
                {uniqueBaths.map((bath, index) => (
                  <div
                    key={index}
                    className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                      selectedBathIndex === index
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handleSelectBathNumber(index)}
                  >
                    {bath}
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
          </div>
          <hr />
        </div>
        {/*  */}
        <div>
          <div className="mt-3">
            <h1 className="capitalize text-xl font-extrabold">
              property prices
            </h1>
            <p className="text-sm mt-2">
              search for a property by its price range
            </p>
            <div className="mt-3">
              <button
                className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize focus:font-bold text-ellipsis text-start flex justify-between"
                onClick={() => setIsClickedPrice(!isClickedPrice)}
              >
                {selectedPrice ? selectedPrice : "select price range"}
                <span>
                  {isClickedPrice ? <ChevronArrowUp /> : <ChevronArrowDown />}
                </span>
              </button>
              {isClickedPrice && (
                <div className="flex flex-col items-start mt-1 rounded-lg border border-black mobile:w-full w-[500px]">
                  <button
                    className="px-3 py-3 w-full text-start border-b border-b-black"
                    onClick={() => handlePriceClick("$100,000 - $500,000")}
                  >
                    $100,000 - $500,000
                  </button>
                  <button
                    className="px-3 py-3 w-full text-start border-b border-b-black"
                    onClick={() => handlePriceClick("$500,000 - $1,000,000")}
                  >
                    $500,000 - $1,000,000
                  </button>
                  <button
                    className="px-3 py-3 w-full text-start border-b border-b-black"
                    onClick={() => handlePriceClick("$1,000,000 - $2,000,000")}
                  >
                    $1,000,000 - $2,000,000
                  </button>
                  <button
                    className="px-3 py-3 w-full text-start"
                    onClick={() => handlePriceClick("$2,000,000 - $3,000,000")}
                  >
                    $2,000,000 - $3,000,000
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-50 bg-white bottom-0 border-t border-t-slate-300 w-full items-center pt-2 pb-5 px-4 flex justify-between">
        <button
          className="capitalize font-bold text-lg hover:bg-slate-200 rounded-lg py-2 px-2 transition-colors duration-300"
          onClick={clearSelectedFilters}
        >
          clear all
        </button>
        <button
          className="capitalize bg-black/85 px-5 py-2 text-white rounded-lg font-bold hover:bg-black transition-colors duration-300"
          onClick={handleFilterClick}
        >
          filter
        </button>
      </div>
    </>
  );
};
