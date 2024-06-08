import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProperties } from "../../../base/hooks/useFetchAllProperties";
import { useHandleCheckoutPropertyPicturesClick } from "../../../base/hooks/useHandleCheckoutPropertyPicturesClick";
import { useHandlePaymentSuccessModal } from "../../../base/hooks/useHandlePaymentSuccessModal";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutPropertyInfo } from "./CheckoutPropertyInfo";
import { ShowCheckoutPropertyPicturesModal } from "./ShowCheckoutPropertyPicturesModal";

export const CheckoutIndex = () => {
  //
  const [isPaymentButtonClicked, setIsPaymentButtonClicked] = useState(false);
  const { data: properties } = useProperties();
  //
  useEffect(() => {
    isPaymentButtonClicked || isPaymentSuccessful
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "");
  }, [isPaymentButtonClicked]);
  //
  const {
    handleOpenPaymentSuccessModal,
    isPaymentSuccessful,
    handleClosePaymentSuccessModal,
  } = useHandlePaymentSuccessModal();
  //
  const {
    isShowCheckoutPropertyPicturesClicked,
    handleOpenCheckoutPicturesModal,
    handleCloseCheckoutPicturesModal,
    clickedProperty,
  } = useHandleCheckoutPropertyPicturesClick();
  //
  const { checkoutIds } = useCheckoutStore((state) => ({
    checkoutIds: state.checkoutIds,
  }));
  //

  if (!properties) {
    return console.log("No properties available");
  }
  //

  const checkoutProperties = properties.filter((property) => {
    return checkoutIds.includes(property.property_id);
  });
  //
  return (
    <div>
      <div
        className={`absolute bg-black/30 dark:bg-black/50 w-[100%] h-[1000vh] top-0 left-0 z-50 flex justify-center items-center ${
          isPaymentButtonClicked || isPaymentSuccessful ? "block" : "hidden"
        }`}
      >
        {isPaymentButtonClicked && (
          <div className="fixed top-[50%]">
            <WaveFormLoader extraStyle="bg-black dark:bg-white" />
          </div>
        )}

        {isPaymentSuccessful && (
          <div className="min-w-[300px] h-[200px] mobile:mx-5 bg-white dark:bg-secondaryColor-dark px-4 py-3 rounded-lg fixed top-[40%] flex flex-col justify-center text-center gap-y-5 capitalize">
            <p className="font-bold mb-2 dark:text-gray-300">
              payment successful. congrats on your new home
            </p>
            <Link
              to={`/`}
              className="capitalize py-1 px-2 text-sm w-full bg-primaryColor-light dark:bg-primaryColorDarkMode/60 transition-colors duration-300 hover:bg-primaryColor-dark dark:hover:bg-primaryColorDarkMode/90 text-white rounded font-bold text-center"
              onClick={handleClosePaymentSuccessModal}
            >
              Check out more properties
            </Link>
          </div>
        )}
      </div>

      <div className="flex gap-x-2 justify-center tablet-below:flex-col tablet-below:gap-y-7 relative">
        <ShowCheckoutPropertyPicturesModal
          clickedCheckoutProperty={clickedProperty}
          handleCloseCheckoutPicturesModal={handleCloseCheckoutPicturesModal}
          isShowCheckoutPropertyPicturesClicked={
            isShowCheckoutPropertyPicturesClicked
          }
          clickedCheckoutPropertyId={clickedProperty?.property_id}
        />
        <CheckoutPropertyInfo
          checkoutProperties={checkoutProperties}
          handleOpenCheckoutPicturesModal={handleOpenCheckoutPicturesModal}
        />
        {/*  */}
        <CheckoutForm
          checkoutProperties={checkoutProperties}
          handleOpenPaymentSuccessModal={handleOpenPaymentSuccessModal}
          setIsPaymentButtonClicked={setIsPaymentButtonClicked}
        />
      </div>
    </div>
  );
};
