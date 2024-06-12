import { useEffect } from "react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/wishlistPage/useHandlePushWishlistProperties";
import { ISimilarProperty } from "../../../base/interface/propertyDetailsPage/ISimilarProperties";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { useHandleIsPropertyInWishlist } from "../../../base/store/wishlistPage/useHandleIsPropertyInWishlistStore";
import { SimilarPropertyCard } from "./SimilarPropertyCard";

export const SimilarProperties = ({
  selectedProperty,
  similarProperties,
}: ISimilarProperty) => {
  //

  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //
  const {
    pushWishlistProperties,
    checkIfPropertyExistsInWishlist,
    IsPushWishlistPropertiesLoading,
  } = useHandlePushWishlistProperties();

  const { setIsPropertyInWishlist, propertiesInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
      propertiesInWishlist: state.propertiesInWishlist,
    }));

  useEffect(() => {
    const fetchWishlistStatuses = async () => {
      for (const property of similarProperties) {
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
    similarProperties,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);

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
                propertiesInWishlist={propertiesInWishlist}
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
