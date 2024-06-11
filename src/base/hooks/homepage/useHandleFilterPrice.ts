import { useState } from "react";

export const useHandleFilterPrice = () => {
  const [isClickedPrice, setIsClickedPrice] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const handlePriceClick = (price: string) => {
    setSelectedPrice(price);
    setIsClickedPrice(false);
  };

  const clearSelectedPriceRange = () => {
    setSelectedPrice("");
  };
  return {
    handlePriceClick,
    isClickedPrice,
    selectedPrice,
    setIsClickedPrice,
    clearSelectedPriceRange,
  };
};
