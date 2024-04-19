export interface IFilterStore {
  filterOptions: Partial<IOptions>;
  updateFilterOptions: (value: string | number | { min: number; max: number }, type: IValueType) => void;
  clearFilterOptions: () => void;
}

interface IOptions {
  selectedBeds: number;
  selectedBaths: number;
  selectedCity: string;
  selectedState: string;
  selectedPrice: string | { min: number, max: number };
}

type IValueType = "bed" | "baths" | "city" | "state" | "price";
