import { useState } from "react";

export const useHandleFilterState = () => {
  //
  const [isClickedState, setIsClickedState] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateClick = (city: string) => {
    setIsClickedState(!isClickedState);
    setSelectedState(city);
  };

  return { setIsClickedState, isClickedState, selectedState, handleStateClick };
};
