import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Properties from "../../../base/dummyData/properties.json";
import { useHandleCheckoutPropertyPicturesClick } from "../../../base/hooks/useHandleCheckoutPropertyPicturesClick";
import { useHandleOrderHistoryDateAndTime } from "../../../base/hooks/useHandleOrderHistoryDateAndTime";
import { IDebitCard } from "../../../base/interface/IDebitCard";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { CheckoutPropertyInfo } from "./CheckoutPropertyInfo";
import { DebitCardFormValidator } from "./DebitCardFormValidator";
import { ShowCheckoutPropertyPicturesModal } from "./ShowCheckoutPropertyPicturesModal";

export const CheckoutIndex = () => {
  //
  const { handleOrderHistoryAndClearCartProperties } =
    useHandleOrderHistoryDateAndTime();
  //
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IDebitCard>({ resolver: yupResolver(DebitCardFormValidator) });
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
  const checkoutProperties = Properties.filter((property) => {
    return checkoutIds.includes(property.property_id);
  });
  //
  const subTotal = checkoutProperties.reduce((acc, property) => {
    return acc + property.price;
  }, 0);
  const estimatedTotal = subTotal + subTotal / 50;

  const handleSubmitForm = () => {
    handleOrderHistoryAndClearCartProperties();
    reset();
  };

  //
  return (
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
      <div className="w-[500px] rounded-lg py-2 px-2 mobile:px-0 tablet-below:w-full tablet-above:sticky tablet-above:top-[120px] h-fit">
        <h1 className="big-screen-mobile-below:text-[20px] between-mobile-and-tablet:text-[22px] tablet-above:text-[25px] font-extrabold text-center capitalize">
          payment information
        </h1>
        <p className="border-2 border-primaryColor-light w-fit px-1 py-1 rounded-lg capitalize font-bold bg-slate-100 m-auto my-4 big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
          credit/debit card
        </p>
        <form
          className="w-full px-2 mobile:px-0"
          onSubmit={handleSubmit(handleSubmitForm)}
          noValidate
        >
          <div className="mb-4">
            <Input
              htmlFor="card_number"
              id="card_number"
              name="card_number"
              nameOfInput="card number"
              placeholder="card number"
              inputType="tel"
              register={register}
              extraStyle={`tracking-widest ${
                errors.card_number
                  ? "border-b-2 border-red-600 focus:border-red-600"
                  : "border-black"
              }`}
              maxLength={19}
            />
            {errors.card_number && (
              <p className="text-right mt-1 text-sm text-red-500">
                {errors?.card_number.message}
              </p>
            )}
          </div>
          {/*  */}
          <div className="mb-4">
            <Input
              htmlFor="cardHolder-name"
              id="cardHolder-name"
              name="cardHolder-name"
              nameOfInput="cardHolder name"
              placeholder="card holder name"
              inputType="text"
              register={register}
              extraStyle={`${
                errors.cardHolder_name
                  ? "border-b-2 border-red-600 focus:border-red-600"
                  : "border-black"
              }`}
            />
            {errors.cardHolder_name && (
              <p className="text-right mt-1 text-sm text-red-500">
                {errors?.cardHolder_name.message}
              </p>
            )}
          </div>
          {/*  */}
          <div className="flex justify-between items-center">
            <div className="mb-4 w-[45%]">
              <Input
                htmlFor="exp_date"
                id="exp_date"
                name="exp_date"
                nameOfInput="exp date"
                placeholder="MM/YY"
                inputType="number"
                register={register}
                extraStyle={`${
                  errors.exp_date
                    ? "border-b-2 border-red-600 focus:border-red-600"
                    : "border-black"
                }`}
              />
              {errors.exp_date && (
                <p className="text-right mt-1 text-sm text-red-500">
                  {errors?.exp_date.message}
                </p>
              )}
            </div>
            {/*  */}
            <div className="mb-4 w-[30%]">
              <Input
                htmlFor="cvv"
                id="cvv"
                name="cvv"
                nameOfInput="CVV"
                placeholder="CVV"
                inputType="tel"
                register={register}
                extraStyle={`${
                  errors.cvv
                    ? "border-b-2 border-red-600 focus:border-red-600"
                    : "border-black"
                }`}
                maxLength={3}
              />
              {errors.cvv && (
                <p className="text-right mt-1 text-sm text-red-500">
                  {errors?.cvv.message}
                </p>
              )}
            </div>
          </div>
          <FormButton name={`pay $${estimatedTotal.toLocaleString()}`} />
        </form>
      </div>
    </div>
  );
};
