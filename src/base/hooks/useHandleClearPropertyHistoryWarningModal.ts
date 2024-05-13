import { useEffect, useRef, useState } from "react";

export const useHandleClearPropertyHistoryWarningModal = () => {
  const clearFilterModalRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (): void => {
      if (clearFilterModalRef.current) {
        handleCloseClearPropertyHistoryWarning();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //
  return {
    isClearPropertyHistoryWarningVisible,
    handleShowClearPropertyHistoryWarning,
    handleCloseClearPropertyHistoryWarning,
    clearFilterModalRef,
  };
};
