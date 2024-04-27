import { PropertyCard } from "../../Global/Cards/PropertyCard";
import { FilterButton } from "./FilterDropdown/FilterButton";

export const HomePageIndex = () => {
  return (
    <div
      className={`pt-2 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-28 `}
    >
      <div className="flex justify-between mb-2">
        <p className="text-lg font-bold">Filter products:</p>
        <FilterButton />
      </div>
      <div className="flex justify-center flex-wrap gap-5 min-h-[50vh]">
        <PropertyCard />
      </div>
    </div>
  );
};
