import { useEffect } from "react";
import propertyBaths from "../../../../base/dummyData/propertyBaths.json";
import propertyBeds from "../../../../base/dummyData/propertyBeds.json";
import { IFilterByBedsAndBaths } from "../../../../base/interface/homepage/IFilterByBedsAndBaths";
import { useFilterStore } from "../../../../base/store/homepage/useFilterStore";

export const FilterByBedsAndBaths = ({
  selectedBaths,
  selectedBeds,
  setSelectedBaths,
  setSelectedBeds,
  selectedCity
}: IFilterByBedsAndBaths) => {
  //
  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
    clearFilterOptions: state.clearFilterOptions,
  }));
  //

  useEffect(() => {
    filterOptions.selectedBeds
      ? setSelectedBeds(filterOptions.selectedBeds)
      : setSelectedBeds(0);
    filterOptions.selectedBaths
      ? setSelectedBaths(filterOptions.selectedBaths)
      : setSelectedBaths(0);
  }, [filterOptions]);
  //

  const bedsOption = propertyBeds.filter((beds)=>{
    if(selectedCity){
      return beds.cities.includes(selectedCity)
    }
    return beds
  })
  // 

  const bathsOption = propertyBaths.filter((baths)=>{
    if(selectedCity){
      return baths.cities.includes(selectedCity)
    }
    return baths
  })

  //
  return (
    <>
      <div className="mt-2">
        <h1 className="capitalize text-xl font-extrabold">beds and baths</h1>
        <div className="mt-3">
          <div>
            <h2 className="capitalize mb-2 text-sm">bedrooms</h2>
            <div className="flex gap-2 mobile:overflow-x-auto no-scrollbar">
              <div
                className={`capitalize border dark:border-gray-400 rounded-2xl px-4 py-[5px] ${
                  selectedBeds === 0
                    ? "bg-black text-white dark:bg-secondaryColor-dark dark:text-white"
                    : "bg-white text-black dark:bg-secondaryColor-lighter/90 dark:text-gray-300"
                } hover:border-black dark:hover:border-gray-200`}
                onClick={() => {
                  setSelectedBeds(0);
                }}
              >
                any
              </div>
              {bedsOption.map((bed) => (
                <div
                  key={bed.id}
                  className={`border hover:border-black dark:border-gray-400 dark:hover:border-gray-200 rounded-2xl px-[23px] py-[5px] ${
                    selectedBeds === bed.beds
                      ? "bg-black text-white dark:bg-secondaryColor-dark dark:text-white"
                      : "bg-white text-black dark:bg-secondaryColor-lighter/90 dark:text-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedBeds(bed.beds);
                  }}
                >
                  {bed.beds}
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="my-6">
            <h2 className="capitalize mb-2 text-sm">bathrooms</h2>
            <div className="flex gap-2 mobile:overflow-x-auto no-scrollbar">
              <div
                className={`capitalize border dark:border-gray-400 rounded-2xl px-4 py-[5px] ${
                  selectedBaths === 0
                    ? "bg-black text-white dark:bg-secondaryColor-dark dark:text-white"
                    : "bg-white text-black dark:bg-secondaryColor-lighter/90 dark:text-gray-300"
                } hover:border-black dark:hover:border-gray-200`}
                onClick={() => {
                  setSelectedBaths(0);
                }}
              >
                any
              </div>
              {bathsOption.map((bath) => (
                <div
                  key={bath.id}
                  className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                    selectedBaths === bath.baths
                      ? "bg-black text-white dark:bg-secondaryColor-dark dark:text-white"
                      : "bg-white text-black dark:bg-secondaryColor-lighter/90 dark:text-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedBaths(bath.baths);
                  }}
                >
                  {bath.baths}
                </div>
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
