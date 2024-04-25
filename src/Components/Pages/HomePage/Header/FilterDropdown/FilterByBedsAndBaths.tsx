import propertyBaths from "../../../../../base/dummyData/propertyBaths.json";
import propertyBeds from "../../../../../base/dummyData/propertyBeds.json";
import { useFilterStore } from "../../../../../base/store/useFilterStore";

export const FilterByBedsAndBaths = () => {
  //
  const { updateFilterOptions, filterOptions } = useFilterStore((state) => ({
    updateFilterOptions: state.updateFilterOptions,
    filterOptions: state.filterOptions,
  }));
  //

  return (
    <>
      <div className="mt-2">
        <h1 className="capitalize text-xl font-extrabold">beds and baths</h1>
        <div className="mt-3">
          <div>
            <h2 className="capitalize mb-2 text-sm">bedrooms</h2>
            <div className="flex gap-2 mobile:overflow-x-auto">
              <div
                className={`capitalize border rounded-2xl px-4 py-[5px] ${
                  filterOptions.selectedBeds === 0
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } hover:border-black`}
                onClick={() => {
                  updateFilterOptions(0, "bed");
                }}
              >
                any
              </div>
              {propertyBeds.map((bed) => (
                <div
                  key={bed.id}
                  className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                    filterOptions.selectedBeds === bed.beds
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => {
                    updateFilterOptions(bed.beds, "bed");
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
            <div className="flex gap-2 mobile:overflow-x-auto ">
              <div
                className={`capitalize border rounded-2xl px-4 py-[5px] ${
                  filterOptions.selectedBaths === 0
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } hover:border-black`}
                onClick={() => {
                  updateFilterOptions(0, "baths");
                }}
              >
                any
              </div>
              {propertyBaths.map((bath) => (
                <div
                  key={bath.id}
                  className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                    filterOptions.selectedBaths === bath.baths
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => {
                    updateFilterOptions(bath.baths, "baths");
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
