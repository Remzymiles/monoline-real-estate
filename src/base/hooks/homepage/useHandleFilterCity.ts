import { useState } from "react";

export const useHandleFilterCity = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isCitiesDropDownOpen, setIsCitiesDropDownOpen] = useState(false);
  const [isStatesDropDownOpen, setIsStatesDropDownOpen] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCitiesDropDownOpen(false);
  };

  const handleStateSelect = (stateName: string) => {
    setSelectedState(stateName);
    setIsStatesDropDownOpen(false);
  };
  return {
    isCitiesDropDownOpen,
    selectedState,
    selectedCity,
    isStatesDropDownOpen,
    handleCitySelect,
    handleStateSelect,
    setIsCitiesDropDownOpen,
    setIsStatesDropDownOpen
  };
};