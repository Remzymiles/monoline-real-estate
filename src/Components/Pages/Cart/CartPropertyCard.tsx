import { useEffect } from "react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/wishlistPage/useHandlePushWishlistProperties";
import { useCartLengthStore } from "../../../base/store/useCartLengthStore";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { CartProperty } from "./CartProperty";
import { CartSummary } from "./CartSummary";
import { useFetchCartProperties } from "../../../base/hooks/cartpage/useFetchCartProperties";
import { useDeleteCartProperty } from "../../../base/hooks/cartpage/useDeleteCartProperty";

export const CartPropertyCard = () => {
  const { data: cartProperties, isLoading } = useFetchCartProperties();
  const { mutate: deleteCartProperty } = useDeleteCartProperty();
  //
  const { updateCartLength } = useCartLengthStore((state) => ({
    updateCartLength: state.updateCartLength,
  }));

  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));

  const {
    pushWishlistProperties,
    checkIfPropertyExistsInWishlist,
    IsPushWishlistPropertiesLoading,
  } = useHandlePushWishlistProperties();

  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

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
            propertiesInWishlist={propertiesInWishlist}
            IsPushWishlistPropertiesLoading={IsPushWishlistPropertiesLoading}
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
