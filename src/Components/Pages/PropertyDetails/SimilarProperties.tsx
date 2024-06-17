import { usePushWishlistProperties } from "../../../base/hooks/wishlistPage/usePushWishlistProperties";
import { ISimilarProperty } from "../../../base/interface/propertyDetailsPage/ISimilarProperties";
import { useIsPushWishlistPropertiesLoadingStore } from "../../../base/store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { SimilarPropertyCard } from "./SimilarPropertyCard";

export const SimilarProperties = ({
  selectedProperty,
  similarProperties,
}: ISimilarProperty) => {
  //

  const { isPropertyInWishlist, pushWishlistProperties } =
    usePushWishlistProperties();
  //
  const { IsPushWishlistPropertiesLoading } =
    useIsPushWishlistPropertiesLoadingStore();
  //

  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="font-bold text-2xl capitalize mb-5">
          new listings in {selectedProperty?.propertyLocation.city}
        </h1>
        {/*  */}
        <div className="flex min-w-full overflow-auto gap-x-4 pb-5">
          {similarProperties.map((property, index) => {
            return (
              <SimilarPropertyCard
                IsPushWishlistPropertiesLoading={
                  IsPushWishlistPropertiesLoading
                }
                handleAddToWishlist={handleAddToWishlist}
                index={index}
                isPropertyInWishlist={isPropertyInWishlist}
                property={property}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
