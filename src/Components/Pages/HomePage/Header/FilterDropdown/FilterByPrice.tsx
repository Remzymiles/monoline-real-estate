import { useState } from "react";
import prices from "../../../../../base/dummyData/propertyPrices.json";
import { useFilterStore } from "../../../../../base/store/useFilterStore";
import { ChevronArrowDown } from "../../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../../Icons/ChevronArrowUp";

export const FilterByPrice = () => {
  //
  const [isPricesDropDownOpen, setIsPricesDropDownOpen] = useState(false);
  //
  const { updateFilterOptions, filterOptions } = useFilterStore((state) => ({
    updateFilterOptions: state.updateFilterOptions,
    filterOptions: state.filterOptions,
  }));

  return (
    <>
      <div>
        <div className="mt-2 mb-4">
          <h1 className="capitalize text-xl font-extrabold">property prices</h1>
          <p className="text-sm mt-2">
            search for a property by its price range
          </p>
          <div className="mt-3 relative">
            <button
              className="border border-black py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize text-start flex justify-between"
              onClick={() => setIsPricesDropDownOpen(!isPricesDropDownOpen)}
            >
              {typeof filterOptions.selectedPrice === "string"
                ? "select price range"
                : `$${filterOptions.selectedPrice?.min.toLocaleString()} - $${filterOptions.selectedPrice?.max.toLocaleString()}`}
              <span>
                {isPricesDropDownOpen ? (
                  <ChevronArrowDown />
                ) : (
                  <ChevronArrowUp />
                )}
              </span>
            </button>
            <div
              className={`absolute flex flex-col items-start mt-1 rounded-lg border bg-white border-black mobile:w-full w-[500px] transition-all duration-300 ${
                isPricesDropDownOpen ? "h-48" : "h-0 opacity-0 invisible"
              }`}
            >
              {prices.map((price, index) => (
                <button
                  key={price.id}
                  className={`px-3 py-3 w-full text-start ${
                    index === prices.length - 1
                      ? "border-none"
                      : "border-b border-b-black"
                  }`}
                  onClick={() => {
                    updateFilterOptions(
                      { min: price.price.min, max: price.price.max },
                      "price"
                    );
                    setIsPricesDropDownOpen(false);
                  }}
                >
                  ${price.price.min.toLocaleString()} - $
                  {price.price.max.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
