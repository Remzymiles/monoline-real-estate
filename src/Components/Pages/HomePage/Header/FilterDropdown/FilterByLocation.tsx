import { useHandleFilterCity } from "../../../../../base/hooks/useHandleFilterCity";
import { useHandleFilterState } from "../../../../../base/hooks/useHandleFilterState";
import { ChevronArrowUp } from "../../../../Icons/ChevronArrowUp";
import { ChevronArrowDown } from "../../../../Icons/ChevronArrowDown";
import PropertyLocations from "../../../../../base/dummyData/properties.json";

export const FilterByLocation = () => {
 //
 const {
  setIsClickedCity,
  isClickedCity,
  selectedCity,
  handleCityClick,
  clearSelectedCity,
} = useHandleFilterCity();
//
const {
  setIsClickedState,
  isClickedState,
  selectedState,
  handleStateClick,
  clearSelectedState,
} = useHandleFilterState();

  const uniqueCities: string[] = [];

  PropertyLocations.forEach((location) => {
    if (!uniqueCities.includes(location.location.city)) {
      uniqueCities.push(location.location.city);
    }
  });
  //
  const uniqueState: string[] = [];

  PropertyLocations.forEach((location) => {
    if (!uniqueState.includes(location.location.state)) {
      uniqueState.push(location.location.state);
    }
  });
  return (
    <>
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
    </>
  );
};
