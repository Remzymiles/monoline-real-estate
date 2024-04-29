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
  const { wishlistPropertyIds, updateWishlistPropertyId } = useWishListStore(
    (state) => ({
      wishlistPropertyIds: state.wishlistPropertyIds,
      updateWishlistPropertyId: state.updateWishlistPropertyIds,
    })
  );

  const handleAddToWishlist = (propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : null;
  };
  //
  return (
    <>
      <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
        <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
          <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark text-[10px]">
            for sale
          </p>
          <div
            className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden"
            onClick={() => handleAddToWishlist(propertyId)}
          >
            <HeartIcon color="text-primaryColor-dark text-sm" />
            save
          </div>
          <div
            className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white tablet-above:hidden mobile:text-xs"
            onClick={() => {
              handleOpenAllPicturesModal();
            }}
          >
            <PhotoIcon extraStyle="text-primaryColor-dark" />
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
              className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm"
              onClick={() => handleAddToWishlist(propertyId)}
            >
              <HeartIcon color="text-primaryColor-dark text-sm" />
              save
            </div>
            <img
              src={selectedProperty?.photos[1]}
              alt="img"
              className="w-[100%] h-[100%] rounded-tr-lg"
            />
          </div>
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div
              className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white"
              onClick={() => {
                handleOpenAllPicturesModal();
              }}
            >
              <PhotoIcon extraStyle="text-primaryColor-dark" />
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
