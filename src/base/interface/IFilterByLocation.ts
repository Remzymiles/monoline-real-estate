export interface IFilterByLocation {
  setIsCitiesDropDownOpen: React.Dispatch<boolean>;
  isCitiesDropDownOpen: boolean;
  handleCitySelect: (city: string) => void;
  selectedCity: string;
  setIsStatesDropDownOpen: React.Dispatch<boolean>;
  isStatesDropDownOpen: boolean;
  handleStateSelect: (stateName: string) => void;
  selectedState: string;
}
