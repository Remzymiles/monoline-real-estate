import { useState } from "react";
import PropertyDetails from "../../../../../base/dummyData/properties.json";

export const FilterBedsAndBaths = () => {
  const [selectedBedIndex, setSelectedBedIndex] = useState(-1);
  const [selectedBathIndex, setSelectedBathIndex] = useState(-1);

  const handleSelectBedNumber = (index: number) => {
    setSelectedBedIndex(index);
  };
  const handleSelectBathNumber = (index: number) => {
    setSelectedBathIndex(index);
  };

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

  return (
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
      </div><hr />
    </div>
  );
};
