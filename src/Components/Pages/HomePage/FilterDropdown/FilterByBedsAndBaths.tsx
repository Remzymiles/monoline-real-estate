import propertyBaths from "../../../../base/dummyData/propertyBaths.json";
import propertyBeds from "../../../../base/dummyData/propertyBeds.json";
import { IFilterByBedsAndBaths } from "../../../../base/interface/IFilterByBedsAndBaths";

export const FilterByBedsAndBaths = ({
  selectedBaths,
  selectedBeds,
  setSelectedBaths,
  setSelectedBeds,
}: IFilterByBedsAndBaths) => {
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
                className={`capitalize border rounded-2xl px-4 py-[5px] ${
                  selectedBeds === 0
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } hover:border-black`}
                onClick={() => {
                  setSelectedBeds(0);
                }}
              >
                any
              </div>
              {propertyBeds.map((bed) => (
                <div
                  key={bed.id}
                  className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                    selectedBeds === bed.beds
                      ? "bg-black text-white"
                      : "bg-white text-black"
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
                className={`capitalize border rounded-2xl px-4 py-[5px] ${
                  selectedBaths === 0
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } hover:border-black`}
                onClick={() => {
                  setSelectedBaths(0);
                }}
              >
                any
              </div>
              {propertyBaths.map((bath) => (
                <div
                  key={bath.id}
                  className={`border hover:border-black rounded-2xl px-[23px] py-[5px] ${
                    selectedBaths === bath.baths
                      ? "bg-black text-white"
                      : "bg-white text-black"
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
