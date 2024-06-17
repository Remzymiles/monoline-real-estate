import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { IProperty } from "../../../Layouts/interface/IProperty";
import { useHandlePushCartProperties } from "../../../base/hooks/cartpage/useHandlePushCartProperties";
import { useCheckoutStore } from "../../../base/store/checkoutPage/useCheckoutStore";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const PropertyDetails = ({
  selectedProperty,
  propertyId,
}: {
  selectedProperty: IProperty;
  propertyId: string | null;
}) => {
  //
  const location = useLocation();
  const { pushCartProperties, IsPushCartPropertiesLoading } =
    useHandlePushCartProperties();
  const { userId } = useUserIdStore((state) => ({ userId: state.userId }));
  //
  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      updateCheckoutIds: state.updateCheckoutIds,
      setIsPropertyFromCart: state.setIsPropertyFromCart,
    })
  );
  //
  const addPropertyToCart = async () => {
    await pushCartProperties(propertyId as string);
  };
  //
  return (
    <div className="flex tablet-below:flex-col justify-center tablet-above:gap-x-16 mt-4">
      <div className="flex tablet-below:justify-between big-screen-mobile-below:flex-col tablet-above:gap-x-28 tablet-below:mb-5">
        <div className="big-screen-mobile-below:mb-3">
          <h1 className="text-xl font-extrabold tracking-wider">
            {selectedProperty?.propertyLocation.address}
          </h1>
          <p className="text-xs mb-3">
            {selectedProperty?.propertyLocation.city}
          </p>
          <div className="mt-1 flex gap-3">
            <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
              <BedIcon extraStyle="text-gray-500 text-[10px]" />
              <span className="font-extrabold">
                {selectedProperty?.propertyDetails.beds}
              </span>
              bd
            </span>
            <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
              <BathIcon extraStyle="text-gray-500 text-[10px]" />
              <span className="font-extrabold">
                {selectedProperty?.propertyDetails.baths}
              </span>
              ba
            </span>
            <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
              <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
              <span className="font-extrabold">
                {selectedProperty?.propertyDetails.sqft.toLocaleString()}
              </span>
              sqft
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-xl tracking-wider">
            ${selectedProperty?.price.toLocaleString()}
          </h1>
          <p className="text-xs">
            Est. Mortgage{" "}
            <span className="font-extrabold">
              ${selectedProperty?.mortgage.toLocaleString()}
            </span>
            /mo*
          </p>
        </div>
      </div>
      <div className="tablet-below:w-full bg-white tablet-above:border dark:border-gray-400/20 rounded-md tablet-above:px-5 pt-3 flex flex-col dark:bg-secondaryColor-dark/10">
        <button
          className="transition-all relative capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 text-sm"
          onClick={() => {
            userId
              ? addPropertyToCart()
              : toast.error("Login or Sign up to add to Cart");
          }}
        >
          Add property to cart
          {IsPushCartPropertiesLoading[String(propertyId)] && (
            <div className="absolute top-0 right-0  bg-black/70 w-[100%] h-[100%] flex justify-center items-center rounded-md">
              <WaveFormLoader extraStyle="bg-white" />
            </div>
          )}
          {/*  */}
        </button>
        <Link
          to={userId ? "/checkout" : `${location.pathname}${location.search}`}
          className="capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-all duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 mb-3 text-sm text-center"
          onClick={() => {
            if (userId) {
              updateCheckoutIds(String(propertyId));
              setIsPropertyFromCart(false);
            } else {
              toast.error("Login or Sign up to buy Property");
            }
          }}
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};
