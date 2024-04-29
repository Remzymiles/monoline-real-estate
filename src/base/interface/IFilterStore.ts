export interface IFilterStore {
  filterOptions: Partial<IFilterOptions>;
  updateFilterOptions: (value: string | number | { min: number; max: number }, type: IValueType) => void;
  clearFilterOptions: () => void;
}

export interface IFilterOptions {
  selectedBeds: number;
  selectedBaths: number;
  selectedCity: string;
  selectedState: string;
  selectedPrice: string | { min: number, max: number };
}

type IValueType = "bed" | "baths" | "city" | "state" | "price";
