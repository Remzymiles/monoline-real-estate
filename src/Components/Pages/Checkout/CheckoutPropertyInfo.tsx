import { ICheckoutPropertyInfo } from "../../../base/interface/ICheckoutPropertyInfo";

export const CheckoutPropertyInfo = ({
  checkoutProperties,
  handleOpenCheckoutPicturesModal,
}: ICheckoutPropertyInfo) => {
    // 
  const subTotal = checkoutProperties.reduce((acc, property) => {
    return acc + property.price;
  }, 0);
  //
  const tax = subTotal / 50;
  const estimatedTotal = subTotal + tax;
  return (
    <>
      <div className="w-[550px] tablet-below:w-full bg-primaryColor-lightCream dark:bg-secondaryColor-light/70 rounded-lg pb-5 px-3 py-3 shadow-xl big-screen-mobile-below:px-0 big-screen-mobile-below:bg-white big-screen-mobile-below:dark:bg-transparent big-screen-mobile-below:shadow-none h-fit">
        <h1 className="capitalize big-screen-mobile-below:text-[20px] between-mobile-and-tablet:text-[22px] tablet-above:text-[25px] font-extrabold text-center mb-4">
          checkout informations
        </h1>
        {checkoutProperties.map((checkoutProperty) => (
          <div
            className="flex gap-x-6 items-center mb-5 big-screen-mobile-below:gap-x-3"
            key={checkoutProperty.property_id}
          >
            <div className="w-[300px] h-[150px] between-mobile-and-tablet:h-[200px] big-screen-mobile-below:h-[150px]">
              <img
                src={checkoutProperty.propertyPhotos[0].url[4]}
                alt="image"
                className="w-[100%] h-[100%] rounded-lg object-cover"
                onClick={() => {
                  handleOpenCheckoutPicturesModal(checkoutProperty);
                }}
              />
            </div>
            <div className="flex justify-between w-full gap-x-3 big-screen-mobile-below:flex-col big-screen-mobile-below:gap-y-3">
              <div>
                <p className="font-bold capitalize big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
                  {checkoutProperty.propertyLocation.address}
                </p>
                <p className="font-bold big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] capitalize text-gray-400">
                  {checkoutProperty.propertyLocation.city}
                </p>
              </div>
              {/*  */}
              <p className="font-extrabold big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px]">
                ${checkoutProperty.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
        {/*  */}

        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-2 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">
            subtotal
          </p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">
            ${subTotal.toLocaleString()}
          </p>
        </div>
        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-2 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">
            tax
          </p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">
            ${tax.toLocaleString()}
          </p>
        </div>
        <hr className="bg-black h-[2px]" />
        {/*  */}
        <div className="flex justify-between py-3 px-1">
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-bold capitalize">
            estimated total
          </p>
          <p className="big-screen-mobile-below:text-[15px] between-mobile-and-tablet:text-[17px] tablet-above:text-[18px] font-semibold capitalize">
            ${estimatedTotal.toLocaleString()}
          </p>
        </div>
        <hr className="bg-black h-[2px]" />
        <hr className="bg-black h-[2px]" />
      </div>
    </>
  );
};
