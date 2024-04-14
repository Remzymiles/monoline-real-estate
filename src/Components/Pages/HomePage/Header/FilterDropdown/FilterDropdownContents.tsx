import { FilterBedsAndBaths } from "./FilterBedsAndBaths";
import { FilterByLocation } from "./FilterByLocation";
import { FilterPrice } from "./FilterPrice";

export const FilterDropdownContents = () => {
  return (
    <div className="pt-4 px-4 max-h-[80%] overflow-y-auto">
      <FilterByLocation />
      {/*  */}
      <FilterBedsAndBaths />
      {/*  */}
      <FilterPrice/>
    </div>
  );
};
