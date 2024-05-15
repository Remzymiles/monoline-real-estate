import { useRef, useState } from "react";

export const useHandleClearPropertyHistoryWarningModal = () => {
  //
  const [
    isClearPropertyHistoryWarningVisible,
    setIsClearPropertyHistoryWarningVisible,
  ] = useState<boolean>(false);
  //
  const handleShowClearPropertyHistoryWarning = () => {
    !isClearPropertyHistoryWarningVisible
      ? setIsClearPropertyHistoryWarningVisible(true)
      : null;
    window.document.body.style.overflow = "hidden";
  };
  const handleCloseClearPropertyHistoryWarning = () => {
    isClearPropertyHistoryWarningVisible
      ? setIsClearPropertyHistoryWarningVisible(false)
      : null;
    window.document.body.style.overflow = "";
  };

  //
  return {
    isClearPropertyHistoryWarningVisible,
    handleShowClearPropertyHistoryWarning,
    handleCloseClearPropertyHistoryWarning,
  };
};
