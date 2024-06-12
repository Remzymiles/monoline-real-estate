import { useState } from "react";

export const useHandleEditPasswordForm = () => {
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
