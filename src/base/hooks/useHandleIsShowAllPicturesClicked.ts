import { useState } from "react";

export const useHandleIsShowAllPicturesClicked = () => {
  const [isShowPicturesClicked, setIsShowPictureClicked] = useState(false);

  const handleOpenAllPicturesModal = () => {
    !isShowPicturesClicked ? setIsShowPictureClicked(true) : null;
    window.document.body.style.overflow = "hidden";
  };
  const handleCloseAllPicturesModal = () => {
    isShowPicturesClicked ? setIsShowPictureClicked(false) : null;
    window.document.body.style.overflow = "";
  };
  //
  return {
    isShowPicturesClicked,
    setIsShowPictureClicked,
    handleOpenAllPicturesModal,
    handleCloseAllPicturesModal,
  };
};
