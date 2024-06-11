import { useState } from "react";

export const useHandlePaymentSuccessModal = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  //
  const handleOpenPaymentSuccessModal = () => {
    !isPaymentSuccessful ? setIsPaymentSuccessful(true) : null;
    window.document.body.style.overflow = "hidden";
  };
  const handleClosePaymentSuccessModal = () => {
    isPaymentSuccessful ? setIsPaymentSuccessful(false) : null;
    window.document.body.style.overflow = "";
  };
  return {
    handleOpenPaymentSuccessModal,
    handleClosePaymentSuccessModal,
    isPaymentSuccessful,
  };
};
