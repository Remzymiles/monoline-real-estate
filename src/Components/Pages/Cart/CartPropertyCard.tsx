import { useEffect } from "react";
import { useDeleteCartProperty } from "../../../base/hooks/cartpage/useDeleteCartProperty";
import { useFetchCartProperties } from "../../../base/hooks/cartpage/useFetchCartProperties";
import { usePushWishlistProperties } from "../../../base/hooks/wishlistPage/usePushWishlistProperties";
import { useCheckoutStore } from "../../../base/store/checkoutPage/useCheckoutStore";
import { useIsPushWishlistPropertiesLoadingStore } from "../../../base/store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { CartProperty } from "./CartProperty";
import { CartSummary } from "./CartSummary";

export const CartPropertyCard = () => {
  const { data: cartProperties, isLoading } = useFetchCartProperties();
  const { mutate: deleteCartProperty } = useDeleteCartProperty();
  //

  const { isPropertyInWishlist, pushWishlistProperties } =
    usePushWishlistProperties();
  //
  const { IsPushWishlistPropertiesLoading } =
    useIsPushWishlistPropertiesLoadingStore();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [cartProperties]);

  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      setIsPropertyFromCart: state.setIsPropertyFromCart,
      updateCheckoutIds: state.updateCheckoutIds,
    })
  );
  //
  if (isLoading) {
    return (
      <div className="absolute top-[40%] left-[50%]">
        <WaveFormLoader extraStyle="bg-black dark:bg-white" />
      </div>
    );
  }

  if (!cartProperties || cartProperties.length === 0) {
    return (
      <p className="text-xl font-extrabold flex justify-center translate-y-44">
        Your cart is empty.
      </p>
    );
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

  const handleDeleteCartProperty = (propertyId: string) => {
    deleteCartProperty(propertyId);
  };

  return (
    <>
      <div className="flex flex-col big-screen-laptop:flex-row gap-14 relative">
        <div className="big-screen-laptop:w-[60%]">
          <CartProperty
            cartProperties={cartProperties}
            handleAddToWishlist={handleAddToWishlist}
            handleDeleteCartProperty={handleDeleteCartProperty}
            IsPushWishlistPropertiesLoading={IsPushWishlistPropertiesLoading}
            isPropertyInWishlist={isPropertyInWishlist}
          />
        </div>
        <CartSummary
          cartProperties={cartProperties}
          handleCheckoutPropertyIds={handleCheckoutPropertyIds}
        />
      </div>
    </>
  );
};
