export interface IFilterByPriceRange {
  setIsPricesDropDownOpen: React.Dispatch<boolean>;
  isPricesDropDownOpen: boolean;
  selectedPrice: { min: number; max: number } | string;
  setSelectedPrice: React.Dispatch<{ min: number; max: number } | string>;
  selectedCity: string;
}
