import { useState } from "react";

export const useHandleEditEmailAndPassword = () => {
  //
  const [isEditPasswordVisible, setIsEditPasswordVisible] = useState(false);
  const [isEditEmailVisible, setIsEditEmailVisible] = useState(false);
  //
  const handleEditEmail = () => {
    isEditEmailVisible
      ? setIsEditEmailVisible(false)
      : setIsEditEmailVisible(true);
    !isEditEmailVisible && setIsEditPasswordVisible(false);
  };
  //
  const handleEditPassword = () => {
    isEditPasswordVisible
      ? setIsEditPasswordVisible(false)
      : setIsEditPasswordVisible(true);
    !isEditPasswordVisible && setIsEditEmailVisible(false);
  };

  return {
    handleEditEmail,
    handleEditPassword,
    isEditPasswordVisible,
    isEditEmailVisible,
  };
};
