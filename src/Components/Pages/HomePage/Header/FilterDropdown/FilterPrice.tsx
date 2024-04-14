import { useState } from "react";
import { ChevronArrowUp } from "../../../../Icons/ChevronArrowUp";
import { ChevronArrowDown } from "../../../../Icons/ChevronArrowDown";

export const FilterPrice = () => {
  const [isClickedPrice, setIsClickedPrice] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const handlePriceClick = (price: string) => {
    setSelectedPrice(price);
    setIsClickedPrice(false); 
  };

  return (
    <div>
      <div className="mt-3">
        <h1 className="capitalize text-xl font-extrabold">property prices</h1>
        <p className="text-sm mt-2">search for a property by its price range</p>
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
  );
};
