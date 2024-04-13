import { useRef, useState } from "react";

export const useHandleFocusAndBlur = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [showSearchText, setShowSearchText] = useState(false);
  const buttonRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };
  //
  const handleBlur = () => {
    setIsFocused(false);
    //
  };

  const handleButtonExpand = () => {
    setIsButtonExpanded(true);
  };

  const handleButtonCollapse = () => {
    setIsButtonExpanded(false);
    setShowSearchText(false);
  };

  const handleTransitionEnd = () => {
    if (isButtonExpanded) {
      setShowSearchText(true);
    }
  };
  //
  return {
    isFocused,
    handleFocus,
    handleBlur,
    buttonRef,
    handleButtonExpand,
    handleButtonCollapse,
    handleTransitionEnd,
    showSearchText,
    isButtonExpanded
  };
};
