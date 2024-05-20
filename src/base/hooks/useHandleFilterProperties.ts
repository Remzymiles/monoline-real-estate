import Properties from "../../base/dummyData/properties.json";
import { useFilterStore } from "../store/useFilterStore";

export const useHandleFilterProperties = () => {
  //
  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
  }));
  //
  const filterProperties = () => {
    const {
      selectedBeds,
      selectedBaths,
      selectedCity,
      selectedPrice,
      selectedState,
    } = filterOptions;

    return Properties.filter((property) => {
      if (selectedCity && property.location.city !== selectedCity) {
        return;
      }
      //
      if (selectedState && property.location.state !== selectedState) {
        return;
      }
      //
      if (selectedBeds && property.details.beds !== selectedBeds) {
        return;
      }
      //
      if (selectedBaths && property.details.baths !== selectedBaths) {
        return;
      }
      //
      if (selectedPrice && typeof selectedPrice === "object") {
        const { min, max } = selectedPrice;
        if (property.price < min || property.price > max) {
          return;
        }
      }
      return true;
    });
  };
  const filteredProperties = filterProperties();
  return { filteredProperties, filterOptions };
};
