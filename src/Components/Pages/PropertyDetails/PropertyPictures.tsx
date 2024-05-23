import { toast } from "sonner";
import { IPropertyPictures } from "../../../base/interface/IPropertyPictures";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { HeartIcon } from "../../Icons/HeartIcon";
import { PhotoIcon } from "../../Icons/PhotoIcon";

export const PropertyPictures = ({
  handleOpenAllPicturesModal,
  selectedProperty,
  propertyId,
}: IPropertyPictures) => {
  //
  const {
    wishlistPropertyIds,
    updateWishlistPropertyIds,
    removeWishlistPropertyId,
  } = useWishListStore((state) => ({
    wishlistPropertyIds: state.wishlistPropertyIds,
    updateWishlistPropertyIds: state.updateWishlistPropertyIds,
    removeWishlistPropertyId: state.removeWishlistPropertyId,
  }));

  const handleAddToWishlist = (propertyId: number) => {
    if (!wishlistPropertyIds.includes(propertyId)) {
      updateWishlistPropertyIds(propertyId);
      toast.success("Property has been added to Wishlist");
    } else {
      removeWishlistPropertyId(propertyId);
      toast.error("Property has been removed from Wishlist");
    }
  };
  //
  return (
    <>
      <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
        <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
          <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark dark:text-primaryColorDarkMode text-[10px]">
            for sale
          </p>
          <div
            className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden ${
              wishlistPropertyIds.includes(
                Number(selectedProperty?.property_id)
              )
                ? "bg-primaryColor- dark:bg-primaryColorDarkMode text-white"
                : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
            }`}
            onClick={() => handleAddToWishlist(propertyId)}
          >
            <HeartIcon
              color={`text-sm ${
                wishlistPropertyIds.includes(
                  Number(selectedProperty?.property_id)
                )
                  ? "text-white"
                  : "text-primaryColor-dark dark:text-primaryColorDarkMode"
              }`}
            />
            {wishlistPropertyIds.includes(Number(selectedProperty?.property_id))
              ? "saved"
              : "save"}
          </div>
          <div
            className="absolute bottom-2 right-2 bg-white/90 text-black text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white tablet-above:hidden mobile:text-xs"
            onClick={() => {
              handleOpenAllPicturesModal();
            }}
          >
            <PhotoIcon extraStyle="text-primaryColor-dark dark:text-primaryColorDarkMode" />
            show all photos
          </div>
          <img
            src={selectedProperty?.photos[0]}
            alt="img"
            className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div
              className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm ${
                wishlistPropertyIds.includes(
                  Number(selectedProperty?.property_id)
                )
                  ? "bg-primaryColor-dark dark:bg-primaryColorDarkMode text-white"
                  : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
              }`}
              onClick={() => handleAddToWishlist(propertyId)}
            >
              <HeartIcon
                color={`text-sm ${
                  wishlistPropertyIds.includes(
                    Number(selectedProperty?.property_id)
                  )
                    ? "text-white"
                    : "text-primaryColor-dark dark:text-primaryColorDarkMode"
                }`}
              />
              {wishlistPropertyIds.includes(
                Number(selectedProperty?.property_id)
              )
                ? "saved"
                : "save"}
            </div>
            <img
              src={selectedProperty?.photos[1]}
              alt="img"
              className="w-[100%] h-[100%] rounded-tr-lg"
            />
          </div>
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div
              className="absolute bottom-2 right-2 bg-white/90 text-black text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white"
              onClick={() => {
                handleOpenAllPicturesModal();
              }}
            >
              <PhotoIcon extraStyle="text-primaryColor-dark dark:text-primaryColorDarkMode" />
              show all photos
            </div>
            <img
              src={selectedProperty?.photos[2]}
              alt="img"
              className="w-[100%] h-[100%] rounded-br-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
