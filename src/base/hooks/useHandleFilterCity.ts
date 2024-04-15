import { useState } from "react";

export const useHandleFilterCity = () => {
  const [isClickedCity, setIsClickedCity] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleCityClick = (city: string) => {
    setIsClickedCity(!isClickedCity);
    setSelectedCity(city);
  };


  return {
    setIsClickedCity,
    isClickedCity,
    selectedCity,
    handleCityClick,
    setSelectedCity,
  };
};