import { useState } from "react";

export const UseHandleGeneralDropDown = () => {
  //
  const [isGeneralDropdownVisible, setIsGeneralVisible] = useState(false);

  const openGeneralDropDown = () => {
    !isGeneralDropdownVisible
      ? setIsGeneralVisible(true)
      : setIsGeneralVisible(false);
  };
  return { openGeneralDropDown, isGeneralDropdownVisible };
};
