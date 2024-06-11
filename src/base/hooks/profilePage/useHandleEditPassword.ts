import { useState } from "react";

export const useHandleEditPassword = () => {
  //
  const [isEditPasswordVisible, setIsEditPasswordVisible] = useState(false);
  //
  const handleEditPassword = () => {
    isEditPasswordVisible
      ? setIsEditPasswordVisible(false)
      : setIsEditPasswordVisible(true);
  };

  return {
    handleEditPassword,
    isEditPasswordVisible,
  };
};
