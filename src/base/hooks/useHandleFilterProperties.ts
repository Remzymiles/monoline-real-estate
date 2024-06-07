import { useFilterStore } from "../store/useFilterStore";
import { useProperties } from "./useFetchAllProperties";

export const useHandleFilterProperties = () => {
  //
  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
  }));
  const { data: properties, isLoading, error, isError } = useProperties();

  //
  const filterProperties = () => {
    const {
      selectedBeds,
      selectedBaths,
      selectedCity,
      selectedPrice,
      selectedState,
    } = filterOptions;

    if (!properties) return [];

    return properties.filter((property) => {
      if (selectedCity && property.propertyLocation.city !== selectedCity) {
        return;
      }
      //
      if (selectedState && property.propertyLocation.state !== selectedState) {
        return;
      }
      //
      if (selectedBeds && property.propertyDetails.beds !== selectedBeds) {
        return;
      }
      //
      if (selectedBaths && property.propertyDetails.baths !== selectedBaths) {
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
  return { filteredProperties, filterOptions, isLoading, error, isError };
};
