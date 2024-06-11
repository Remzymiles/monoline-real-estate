import { useState } from "react";

export const useHandleFilterState = () => {
  const [isClickedState, setIsClickedState] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateClick = (state: string) => {
    setIsClickedState(!isClickedState);
    setSelectedState(state);
  };


  return { 
    setIsClickedState, 
    isClickedState, 
    selectedState, 
    handleStateClick,
    setSelectedState
  };
};