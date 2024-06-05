import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteCartProperty } from "../../../base/hooks/useDeleteCartProperty";
import { useFetchCartProperties } from "../../../base/hooks/useFetchCartProperties";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { ICartProperty } from "../../../base/interface/ICartProperty";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { getAuthData } from "../../../base/utils/getAuthData";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { TrashCanIcon } from "../../Icons/TrashCanIcon";
import { CartSummary } from "./CartSummary";

export const CartPropertyCard = () => {
  const { data: cartProperties, isLoading } = useFetchCartProperties();
  const { mutate: deleteCartProperty } = useDeleteCartProperty();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };

    fetchData();
  }, []);

  const { pushWishlistProperties, checkIfPropertyExistsInWishlist } =
    useHandlePushWishlistProperties();

  const { propertyIds, removePropertyId } = useCartPropertyIdsStore(
    (state) => ({
      propertyIds: state.propertyIds,
      removePropertyId: state.removePropertyId,
    })
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [propertyIds]);

  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      setIsPropertyFromCart: state.setIsPropertyFromCart,
      updateCheckoutIds: state.updateCheckoutIds,
    })
  );

  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

  useEffect(() => {
    const fetchWishlistStatuses = async () => {
      if (!cartProperties) return;
      for (const property of cartProperties) {
        const exists = await checkIfPropertyExistsInWishlist(
          userId,
          property.property_id
        );
        setIsPropertyInWishlist(property.property_id, exists);
      }
    };

    fetchWishlistStatuses();
  }, [
    userId,
    cartProperties,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);

  if (!cartProperties) {
    return null;
  }

  const handleCheckoutPropertyIds = (propertyIds: string | string[]) => {
    if (cartProperties.length > 0) {
      updateCheckoutIds(propertyIds);
      setIsPropertyFromCart(true);
    }
  };

  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };

  const handleDeleteCartProperty = (id: string) => {
    deleteCartProperty(id);
    removePropertyId(id);
  };

  return (
    <>
      <div className="flex flex-col big-screen-laptop:flex-row gap-14">
        <div className="big-screen-laptop:w-[60%]">
          {cartProperties.length <= 0 && (
            <p className="text-xl font-extrabold flex justify-center translate-y-44 big-screen-laptop:translate-x-52">
              Your cart is empty.
            </p>
          )}
          {isLoading && <WaveFormLoader />}
          {cartProperties.map((cartProperty: ICartProperty) => {
            const isPropertyInWishlist =
              propertiesInWishlist[cartProperty.property_id];

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
                      className="w-full bg-primaryColor-light big-screen-mobile-below:py-2 py-1 px-2 dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 dark:text-gray-200 hover:bg-primaryColor-dark transition-colors duration-300 rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold"
                      onClick={() => {
                        handleAddToWishlist(cartProperty.property_id);
                      }}
                    >
                      {isPropertyInWishlist ? "saved" : "save for later"}
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        {cartProperties.length > 0 && (
          <CartSummary
            cartProperties={cartProperties}
            handleCheckoutPropertyIds={handleCheckoutPropertyIds}
          />
        )}
      </div>
    </>
  );
};
