import { usePushWishlistProperties } from "../../../base/hooks/wishlistPage/usePushWishlistProperties";
import { IPropertyPictures } from "../../../base/interface/propertyDetailsPage/IPropertyPictures";
import { useIsPushWishlistPropertiesLoadingStore } from "../../../base/store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { TailSpinLoader } from "../../Global/Loaders/TailSpinLoader";
import { HeartIcon } from "../../Icons/HeartIcon";
import { PhotoIcon } from "../../Icons/PhotoIcon";

export const PropertyPictures = ({
  handleOpenAllPicturesModal,
  selectedProperty,
  propertyId,
}: IPropertyPictures) => {
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
      <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
        <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
          <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark dark:text-primaryColorDarkMode text-[10px]">
            for sale
          </p>
          <div
            className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden ${
              isPropertyInWishlist(propertyId)
                ? "bg-primaryColor-dark dark:bg-primaryColorDarkMode text-white"
                : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
            }`}
            onClick={() => handleAddToWishlist(propertyId)}
          >
            <HeartIcon
              color={`text-sm ${
                isPropertyInWishlist(propertyId)
                  ? "text-white"
                  : "text-primaryColor-dark dark:text-primaryColorDarkMode"
              }`}
            />
            {isPropertyInWishlist(propertyId) ? "saved" : "save"}
            {/*  */}
            {IsPushWishlistPropertiesLoading[propertyId] && (
              <div className="absolute top-0 left-0 bg-black/80 w-[100%] flex justify-center items-center py-1 rounded-sm">
                <TailSpinLoader color="white" />
              </div>
            )}
          </div>
          <button
            className="absolute bottom-2 right-2 bg-white/90 text-black text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white tablet-above:hidden mobile:text-xs"
            onClick={() => {
              handleOpenAllPicturesModal();
            }}
          >
            <PhotoIcon extraStyle="text-primaryColor-dark dark:text-primaryColorDarkMode" />
            show all photos
          </button>
          <img
            src={selectedProperty?.propertyPhotos[0]?.url[4]}
            alt="img"
            className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <button
              className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm ${
                isPropertyInWishlist(propertyId)
                  ? "bg-primaryColor-dark dark:bg-primaryColorDarkMode text-white"
                  : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
              }`}
              onClick={() => handleAddToWishlist(propertyId)}
            >
              <HeartIcon
                color={`text-sm ${
                  isPropertyInWishlist(propertyId)
                    ? "text-white"
                    : "text-primaryColor-dark dark:text-primaryColorDarkMode"
                }`}
              />
              {isPropertyInWishlist(propertyId) ? "saved" : "save"}
              {/*  */}
              {IsPushWishlistPropertiesLoading[propertyId] && (
                <div className="absolute top-0 left-0 bg-black/80 w-[100%] flex justify-center items-center py-1 rounded-sm">
                  <TailSpinLoader color="white" />
                </div>
              )}
            </button>
            <img
              src={selectedProperty?.propertyPhotos[0]?.url[3]}
              alt="img"
              className="w-[100%] h-[100%] rounded-tr-lg"
            />
          </div>
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <button
              className="absolute bottom-2 right-2 bg-white/90 text-black text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white"
              onClick={() => {
                handleOpenAllPicturesModal();
              }}
            >
              <PhotoIcon extraStyle="text-primaryColor-dark dark:text-primaryColorDarkMode" />
              show all photos
            </button>
            <img
              src={selectedProperty?.propertyPhotos[0]?.url[2]}
              alt="img"
              className="w-[100%] h-[100%] rounded-br-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
