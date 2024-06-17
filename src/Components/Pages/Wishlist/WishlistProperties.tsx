import { useFetchWishlistProperties } from "../../../base/hooks/wishlistPage/useFetchWishlistProperties";
import { usePushWishlistProperties } from "../../../base/hooks/wishlistPage/usePushWishlistProperties";
import { IWishlistProperty } from "../../../base/interface/wishlistPage/IWishlistProperty";
import { useIsPushWishlistPropertiesLoadingStore } from "../../../base/store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { WishlistPropertyCard } from "./WishlistPropertyCard";

export const WishlistProperties = () => {
  //

  const { data: wishlistProperties, isLoading } = useFetchWishlistProperties();
  //
  const { pushWishlistProperties } = usePushWishlistProperties();
  //
  const { IsPushWishlistPropertiesLoading } =
    useIsPushWishlistPropertiesLoadingStore();

  //
  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };
  //

  //
  return (
    <div
      className={`tablet-below:flex tablet-below:justify-center tablet-below:flex-wrap tablet-below:gap-5 ${
        wishlistProperties && wishlistProperties.length > 0
          ? "minMax"
          : "flex justify-center items-center min-h-[40vh] relative"
      }`}
    >
      <div
        className={`absolute flex justify-center items-center z-50 top-[50%] left-[50%] ${
          isLoading ? "block" : "hidden"
        }`}
      >
        <WaveFormLoader extraStyle="bg-black dark:bg-white" />
      </div>
      {/*  */}
      {wishlistProperties &&
        wishlistProperties.length > 0 &&
        wishlistProperties.map((property: IWishlistProperty, index: number) => (
          <WishlistPropertyCard
            handleAddToWishlist={handleAddToWishlist}
            index={index}
            property={property}
            key={index}
            IsPushWishlistPropertiesLoading={IsPushWishlistPropertiesLoading}
          />
        ))}
      {/*  */}
      {!wishlistProperties ||
        (wishlistProperties.length <= 0 && (
          <>
            <p className="text-xl font-extrabold capitalize">
              wishlist is empty. add properties
            </p>
          </>
        ))}
      {/*  */}
    </div>
  );
};
