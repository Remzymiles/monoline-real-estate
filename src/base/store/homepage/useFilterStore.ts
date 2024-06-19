import { create } from "zustand";
import { IFilterStore } from "../../interface/homepage/IFilterStore";

export const useFilterStore = create<IFilterStore>((set) => ({
  filterOptions: {
    selectedBeds: 0,
    selectedBaths: 0,
    selectedCity: "",
    selectedState: "",
    selectedPrice: "",
  },
  updateFilterOptions: (value, type) =>
    set((state) => {
      let updatedFilterOptions = {};
      switch (type) {
        case "baths":
          updatedFilterOptions = {
            ...state.filterOptions,
            selectedBaths: value,
          };
          break;
        case "bed":
          updatedFilterOptions = {
            ...state.filterOptions,
            selectedBeds: value,
          };
          break;
        case "city":
          updatedFilterOptions = {
            ...state.filterOptions,
            selectedCity: value,
          };
          break;
        case "state":
          updatedFilterOptions = {
            ...state.filterOptions,
            selectedState: value,
          };
          break;
        case "price":
          updatedFilterOptions = {
            ...state.filterOptions,
            selectedPrice: value,
          };
          break;
        default:
          break;
      }
      return { filterOptions: updatedFilterOptions };
    }),

  clearFilterOptions: () =>
    set({
      filterOptions: {
        selectedBeds: 0,
        selectedBaths: 0,
        selectedCity: "",
        selectedState: "",
        selectedPrice: "",
      },
    }),

  isFilterButtonClicked: "",
  
  setIsFilterButtonClicked: (value) =>
    set({
      isFilterButtonClicked: value,
    }),
}));
