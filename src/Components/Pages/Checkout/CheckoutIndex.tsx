import Properties from "../../../base/dummyData/properties.json";
import { useHandleCheckoutPropertyPicturesClick } from "../../../base/hooks/useHandleCheckoutPropertyPicturesClick";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { useOrderHistoryStore } from "../../../base/store/useOrderHistoryStore";
import { Input } from "../../Global/FormComponents/Input";
import { CheckoutPropertyInfo } from "./CheckoutPropertyInfo";
import { ShowCheckoutPropertyPicturesModal } from "./ShowCheckoutPropertyPicturesModal";

export const CheckoutIndex = () => {
  //
  const {
    isShowCheckoutPropertyPicturesClicked,
    handleOpenCheckoutPicturesModal,
    handleCloseCheckoutPicturesModal,
    clickedProperty,
  } = useHandleCheckoutPropertyPicturesClick();
  //
  const { checkoutIds, isPropertyFromCart } = useCheckoutStore((state) => ({
    checkoutIds: state.checkoutIds,
    isPropertyFromCart: state.isPropertyFromCart,
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
  //
  const { updateOrderHistoryIds, orderHistoryPropertyIds } =
    useOrderHistoryStore((state) => ({
      orderHistoryPropertyIds: state.orderHistoryPropertyIds,
      updateOrderHistoryIds: state.updateOrderHistoryPropertyIds,
    }));
  //
  const { clearCartPropertyIds } = useCartPropertyIdsStore((state) => ({
    clearCartPropertyIds: state.clearCartPropertyIds,
  }));
  //
  const handleOrderHistoryAndClearCartProperties = () => {
    const updatedIds =
      typeof checkoutIds === "number"
        ? [...orderHistoryPropertyIds, checkoutIds]
        : [...orderHistoryPropertyIds, ...checkoutIds];
    updateOrderHistoryIds(updatedIds);
    isPropertyFromCart === true && clearCartPropertyIds()
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
      <div className="w-[700px] rounded-lg py-2 px-2 tablet-below:w-full tablet-above:sticky tablet-above:top-[120px] h-fit">
        <h1 className="big-screen-mobile-below:text-[20px] between-mobile-and-tablet:text-[22px] tablet-above:text-[25px] font-extrabold text-center capitalize">
          payment information
        </h1>
        <p className="border-2 border-primaryColor-light w-fit px-1 py-1 rounded-lg capitalize font-bold bg-slate-100 m-auto my-4 big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
          credit/debit card
        </p>
        <div className="w-full px-2">
          <div className="mb-4">
            <Input
              htmlFor="card_number"
              id="card_number"
              name="card_number"
              nameOfInput="card number"
              placeholder="card number"
              inputType="number"
              register={() => {}}
              extraStyle={``}
            />
          </div>
          {/*  */}
          <div className="mb-4">
            <Input
              htmlFor="cardHolder-name"
              id="cardHolder-name"
              name="cardHolder-name"
              nameOfInput="cardHolder name"
              placeholder="card holder name"
              inputType="number"
              register={() => {}}
              extraStyle={``}
            />
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
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4 w-[30%]">
              <Input
                htmlFor="cvv"
                id="cvv"
                name="cvv"
                nameOfInput="cvv"
                placeholder="CVV"
                inputType="number"
                register={() => {}}
                extraStyle={``}
              />
            </div>
          </div>
          <button
            className="bg-primaryColor-light py-2 px-2 w-full text-white capitalize big-screen-mobile-below:text-[16px] between-mobile-and-tablet:text-[18px] tablet-above:text-[19px] font-bold rounded-lg hover:bg-primaryColor-dark transition-colors duration-300"
            onClick={handleOrderHistoryAndClearCartProperties}
          >
            pay ${estimatedTotal.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};
