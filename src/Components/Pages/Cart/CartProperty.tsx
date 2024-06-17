import { Link } from "react-router-dom";
import { ICartProperty } from "../../../base/interface/cartpage/ICartProperty";
import { TailSpinLoader } from "../../Global/Loaders/TailSpinLoader";
import { TrashCanIcon } from "../../Icons/TrashCanIcon";

export const CartProperty = ({
  cartProperties,
  isPropertyInWishlist,
  handleDeleteCartProperty,
  handleAddToWishlist,
  IsPushWishlistPropertiesLoading,
}: {
  cartProperties: ICartProperty[];
  isPropertyInWishlist: (propertyId: string) => boolean;
  handleDeleteCartProperty: (propertyId: string) => void;
  handleAddToWishlist: (propertyId: string) => void;
  IsPushWishlistPropertiesLoading: { [propertyId: string]: boolean };
}) => {
  return (
    <>
      {cartProperties.map((cartProperty: ICartProperty) => {
        return (
          <div key={cartProperty?.property_id}>
            <div className="grid grid-cols-4 big-screen-laptop:justify-around gap-x-5 big-screen-mobile-below:flex big-screen-mobile-below:flex-col my-3">
              <Link
                to={`/property-details/address=${cartProperty.address}&city=${cartProperty.city}&state=${cartProperty.state}&country=${cartProperty.country}&?id=${cartProperty.property_id}`}
                className="w-[250px] col-span-2 h-[200px] flex gap-x-4 big-screen-mobile-below:w-[100%] big-screen-mobile-below:h-[250px] big-screen-mobile-below:flex-col big-screen-mobile-below:mb-2"
              >
                <img
                  src={cartProperty.property_photo_urls[4]}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover rounded-md"
                />
              </Link>
              <div className="py-2">
                <p className="font-semibold capitalize mb-2 break-words text-md">
                  {cartProperty?.address}
                </p>
                <p className="font-bold capitalize text-lg">
                  ${cartProperty?.price.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col justify-between items-end h-[200px] big-screen-mobile-below:w-full py-2 big-screen-mobile-below:h-auto">
                <div
                  className="w-fit big-screen-mobile-below:flex big-screen-mobile-below:w-full bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 big-screen-mobile-below:py-2 big-screen-mobile-below:justify-center big-screen-mobile-below:gap-x-3 big-screen-mobile-below:items-center big-screen-mobile-below:rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold rounded-full px-[7px] hover:bg-primaryColor-dark transition-colors duration-300"
                  onClick={() => {
                    handleDeleteCartProperty(cartProperty.property_id);
                  }}
                >
                  <TrashCanIcon
                    clicked={() => {
                      handleDeleteCartProperty(cartProperty.property_id);
                    }}
                    extraStyle="text-white dark:text-gray-200"
                  />{" "}
                  <span className="hidden big-screen-mobile-below:block">
                    remove property
                  </span>
                </div>
                <button
                  className="w-full relative bg-primaryColor-light big-screen-mobile-below:py-2 py-1 px-2 dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 dark:text-gray-200 hover:bg-primaryColor-dark transition-colors duration-300 rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold"
                  onClick={() => {
                    handleAddToWishlist(cartProperty.property_id);
                  }}
                >
                  {isPropertyInWishlist(cartProperty.property_id)
                    ? "saved to wishlist"
                    : "save for later"}
                  {/*  */}
                  {IsPushWishlistPropertiesLoading[
                    cartProperty.property_id
                  ] && (
                    <div className="absolute top-0 bg-black/80 w-[100%] h-[100%] flex justify-center items-center rounded-lg right-0">
                      <TailSpinLoader color="white" />
                    </div>
                  )}
                </button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};
