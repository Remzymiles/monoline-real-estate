import { useState } from "react";

export const UseHandleGeneralDropDown = () => {
  //
  const [isGeneralVisible, setIsGeneralVisible] = useState(false);

  const openGeneralDropDown = () => {
    !isGeneralVisible ? setIsGeneralVisible(true) : setIsGeneralVisible(false);
  };
  return { openGeneralDropDown, isGeneralVisible };
};
