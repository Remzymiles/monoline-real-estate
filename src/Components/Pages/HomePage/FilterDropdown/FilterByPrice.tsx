import { useEffect } from "react";
import prices from "../../../../base/dummyData/propertyPrices.json";
import { IFilterByPriceRange } from "../../../../base/interface/IFilterByPriceRange";
import { useFilterStore } from "../../../../base/store/useFilterStore";
import { ChevronArrowDown } from "../../../Icons/ChevronArrowDown";
import { ChevronArrowUp } from "../../../Icons/ChevronArrowUp";

export const FilterByPrice = ({
  setIsPricesDropDownOpen,
  isPricesDropDownOpen,
  selectedPrice,
  setSelectedPrice,
}: IFilterByPriceRange) => {
  //
  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
  }));
  useEffect(() => {
    filterOptions.selectedPrice
      ? setSelectedPrice(filterOptions.selectedPrice)
      : setSelectedPrice("");
  }, [filterOptions]);
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
              className="border border-black dark:border-gray-400 py-3 px-3 mobile:w-full w-[500px] rounded-md capitalize text-start flex justify-between"
              onClick={() => setIsPricesDropDownOpen(!isPricesDropDownOpen)}
            >
              {typeof selectedPrice === "string"
                ? "select price range"
                : `$${selectedPrice.min.toLocaleString()} - $${selectedPrice.max.toLocaleString()}`}
              <span>
                {isPricesDropDownOpen ? (
                  <ChevronArrowDown />
                ) : (
                  <ChevronArrowUp />
                )}
              </span>
            </button>
            <div
              className={`absolute flex flex-col items-start mt-1 rounded-lg border bg-white dark:bg-secondaryColor-dark border-black dark:border-gray-400 mobile:w-full w-[500px] transition-all duration-300 ${
                isPricesDropDownOpen ? "h-48" : "h-0 opacity-0 invisible"
              }`}
            >
              {prices.map((price, index) => (
                <button
                  key={price.id}
                  className={`px-3 py-3 w-full text-start dark:hover:bg-secondaryColor-light/30 ${
                    index === prices.length - 1
                      ? "border-none"
                      : "border-b border-b-black dark:border-gray-400"
                  }`}
                  onClick={() => {
                    setSelectedPrice({
                      min: price.price.min,
                      max: price.price.max,
                    });
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
