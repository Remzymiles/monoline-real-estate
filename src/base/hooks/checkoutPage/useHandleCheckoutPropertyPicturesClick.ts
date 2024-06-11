import { useState } from "react";
import { IProperty } from "../interface/IProperty";

export const useHandleCheckoutPropertyPicturesClick = () => {
  const [isShowCheckoutPropertyPicturesClicked, setIsShowCheckoutPropertyPictureClicked] =
    useState<boolean>(false);
    const [clickedProperty, setClickedProperty] = useState<IProperty>();
    // 
    const handleOpenCheckoutPicturesModal = (property:IProperty) => {
      setClickedProperty(property);
    !isShowCheckoutPropertyPicturesClicked ? setIsShowCheckoutPropertyPictureClicked(true) : null;
    window.document.body.style.overflow = "hidden";
  };
  const handleCloseCheckoutPicturesModal = () => {
    isShowCheckoutPropertyPicturesClicked ? setIsShowCheckoutPropertyPictureClicked(false) : null;
    window.document.body.style.overflow = "";
  };
  //
  return {
    isShowCheckoutPropertyPicturesClicked,
    clickedProperty,
    setIsShowCheckoutPropertyPictureClicked,
    handleOpenCheckoutPicturesModal,
    handleCloseCheckoutPicturesModal,
  };
};
