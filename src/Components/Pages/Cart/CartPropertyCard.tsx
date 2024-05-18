import { useEffect } from "react";
import { Link } from "react-router-dom";
import Properties from "../../../base/dummyData/properties.json";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { TrashCanIcon } from "../../Icons/TrashCanIcon";
import { CartSummary } from "./CartSummary";

export const CartPropertyCard = () => {
  const { propertyIds, removePropertyId } = useCartPropertyIdsStore(
    (state) => ({
      propertyIds: state.propertyIds,
      removePropertyId: state.removePropertyId,
    })
  );

  const cartProperties = Properties.filter((property) =>
    propertyIds.includes(property.property_id)
  );

  //
  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      setIsPropertyFromCart: state.setIsPropertyFromCart,
      updateCheckoutIds: state.updateCheckoutIds,
    })
  );
  const handleCheckoutPropertyIds = () => {
    if (cartProperties.length > 0) {
      updateCheckoutIds(propertyIds);
      setIsPropertyFromCart(true);
    }
  };
  //
  const {
    wishlistPropertyIds,
    updateWishlistPropertyId,
    removeWishlistPropertyId,
  } = useWishListStore((state) => ({
    wishlistPropertyIds: state.wishlistPropertyIds,
    updateWishlistPropertyId: state.updateWishlistPropertyIds,
    removeWishlistPropertyId: state.removeWishlistPropertyId,
  }));

  const handleAddToWishlist = (propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : removeWishlistPropertyId(propertyId);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [propertyIds]);

  //
  return (
    <>
      <div className="flex flex-col big-screen-laptop:flex-row gap-14">
        <div className="big-screen-laptop:w-[60%]">
          {cartProperties.length <= 0 && (
            <p className="text-xl font-extrabold flex justify-center translate-y-44 big-screen-laptop:translate-x-52">
              Your cart is empty.
            </p>
          )}
          {cartProperties.map((cartProperty) => {
            return (
              <div key={cartProperty.property_id}>
                <div className="grid grid-cols-4 big-screen-laptop:justify-around gap-x-5 big-screen-mobile-below:flex big-screen-mobile-below:flex-col my-3">
                  <Link
                    to={`/property-details/address=${cartProperty.location.address}&city=${cartProperty.location.city}&state=${cartProperty.location.state}&country=${cartProperty.location.country}&?id=${cartProperty.property_id}`}
                    className="w-[250px] col-span-2 h-[200px] flex gap-x-4 big-screen-mobile-below:w-[100%] big-screen-mobile-below:h-[250px] big-screen-mobile-below:flex-col big-screen-mobile-below:mb-2"
                  >
                    <img
                      src={cartProperty.photos[0]}
                      alt="img"
                      className="w-[100%] h-[100%] object-cover rounded-md"
                    />
                  </Link>
                  <div className="py-2">
                    <p className="font-semibold capitalize mb-2 break-words text-md">
                      {cartProperty.location.address}
                    </p>
                    <p className="font-bold capitalize text-lg">
                      ${cartProperty.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end h-[200px] big-screen-mobile-below:w-full py-2 big-screen-mobile-below:h-auto">
                    <div
                      className="w-fit big-screen-mobile-below:flex big-screen-mobile-below:w-full bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 big-screen-mobile-below:py-2 big-screen-mobile-below:justify-center big-screen-mobile-below:gap-x-3 big-screen-mobile-below:items-center big-screen-mobile-below:rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold rounded-full px-[7px] hover:bg-primaryColor-dark transition-colors duration-300"
                      onClick={() => {
                        removePropertyId(cartProperty.property_id);
                      }}
                    >
                      <TrashCanIcon
                        clicked={() => {
                          removePropertyId(cartProperty.property_id);
                        }}
                        extraStyle="text-white dark:text-gray-200"
                      />{" "}
                      <span className="hidden big-screen-mobile-below:block">
                        remove property
                      </span>
                    </div>
                    <button
                      className="w-full bg-primaryColor-light big-screen-mobile-below:py-2 py-1 px-2 dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 dark:text-gray-200 hover:bg-primaryColor-dark transition-colors duration-300 rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold"
                      onClick={() => {
                        handleAddToWishlist(cartProperty.property_id);
                      }}
                    >
                      {wishlistPropertyIds.includes(
                        Number(cartProperty.property_id)
                      )
                        ? "saved"
                        : "save for later"}
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        {
          cartProperties.length > 0 && <CartSummary
          cartProperties={cartProperties}
          handleCheckoutPropertyIds={handleCheckoutPropertyIds}
        />
        }
        
      </div>
    </>
  );
};
