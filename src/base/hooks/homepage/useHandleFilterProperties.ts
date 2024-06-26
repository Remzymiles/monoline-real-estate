import { useFilterStore } from "../../store/homepage/useFilterStore";
import { useAllProperties } from "../useFetchAllProperties";

export const useHandleFilterProperties = () => {
  //
  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
  }));
  const { data: properties, isLoading, error, isError } = useAllProperties();

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
      if (
        selectedBeds &&
        Number(property.propertyDetails.beds) !== selectedBeds
      ) {
        return;
      }
      //
      if (
        selectedBaths &&
        Number(property.propertyDetails.baths) !== selectedBaths
      ) {
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
