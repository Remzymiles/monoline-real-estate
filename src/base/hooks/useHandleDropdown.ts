import { useState } from "react";

export const useHandleDropdown = () => {
  //
  const [isVisible, setIsVisible] = useState(false);

  const openDropDown = () => {
    !isVisible ? setIsVisible(true) : setIsVisible(false);
  };
  return { isVisible, openDropDown };
};
