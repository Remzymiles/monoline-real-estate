import { useHandlePushWishlistProperties } from "../../../base/hooks/wishlistPage/useHandlePushWishlistProperties";
import { useRemovePropertyFromWishlist } from "../../../base/hooks/wishlistPage/useRemovePropertyFromWishlist";
import { IShowAllPicturesModal } from "../../../base/interface/IShowAllPictureModal";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { TailSpinLoader } from "../../Global/Loaders/TailSpinLoader";
import { HeartIcon } from "../../Icons/HeartIcon";
import { XIcon } from "../../Icons/XIcon";

export const ShowAllPicturesModal = ({
  selectedProperty,
  isShowPicturesClicked,
  handleCloseAllPicturesModal,
  propertyId,
}: IShowAllPicturesModal) => {
  //
  const { pushWishlistProperties, IsPushWishlistPropertiesLoading } =
    useHandlePushWishlistProperties();
  //
  const { mutate: removeWishlistProperty } = useRemovePropertyFromWishlist();

  const { propertiesInWishlist } = useHandleIsPropertyInWishlist((state) => ({
    propertiesInWishlist: state.propertiesInWishlist,
  }));
  //
  if (!selectedProperty) return;
  //
  const isPropertyInWishlist =
    propertiesInWishlist[selectedProperty?.property_id];
  //
  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
    isPropertyInWishlist === true && removeWishlistProperty(propertyId);
  };
  //
  return (
    <>
      <div
        className={`absolute bg-black/30 w-[100%] h-[100%] flex justify-center tablet-below:items-end tablet-above:items-center right-0 -top-60 z-50 ${
          isShowPicturesClicked ? "block" : "hidden"
        }`}
      >
        <div className="fixed tablet-above:top-10 flex justify-center big-screen-mobile-below:bottom-0 between-mobile-and-tablet:top-[240px]">
          <div className="tablet-below:w-full dark:bg-secondaryColor-light bg-white  big-screen-mobile-below:h-[87vh] between-mobile-and-tablet:h-[73vh] h-[90vh] tablet-above:w-[95%] overflow-auto">
            <div className="flex justify-between mobile:items-center px-3 py-3 bg-white dark:bg-secondaryColor-light w-full tablet-below:fixed big-screen-mobile-below:top-11 between-mobile-and-tablet:top-[185px] tablet-below:rounded-t-xl">
              <div className="capitalize font-bold text-center hidden mobile:block text-sm">
                Photos ({selectedProperty?.propertyPhotos[0].url.length})
              </div>
              <div className="flex gap-x-1 text-sm items-center mobile:hidden">
                <p className="font-bold">
                  {selectedProperty?.propertyLocation.address} |
                </p>
                <p className="font-bold">
                  ${selectedProperty?.price.toLocaleString()} |
                </p>
                <p className="font-bold">
                  {selectedProperty?.propertyDetails.beds}bd
                </p>
                <p className="font-bold">
                  {selectedProperty?.propertyDetails.baths}ba
                </p>
              </div>
              <div className="flex gap-7 mobile:gap-5 justify-center items-center">
                <div>
                  <button
                    className={`capitalize relative border border-gray-200 flex gap-2 transition-all duration-300 px-4 py-1.5 rounded-lg font-bold text-sm ${
                      isPropertyInWishlist === true
                        ? "bg-primaryColor-light dark:bg-primaryColorDarkMode/90 text-white hover:bg-primaryColor-dark dark:hover:bg-primaryColorDarkMode"
                        : "bg-white text-primaryColor-dark hover:bg-gray-200"
                    }`}
                    onClick={() => handleAddToWishlist(propertyId)}
                  >
                    <HeartIcon
                      color={`text-sm ${
                        isPropertyInWishlist === true
                          ? "text-white"
                          : "text-primaryColor-dark dark:text-primaryColorDarkMode"
                      }`}
                    />
                    {isPropertyInWishlist === true ? "saved" : "save"}
                    {/*  */}
                    {IsPushWishlistPropertiesLoading[propertyId] && (
                      <div className="absolute top-0 bg-black/80 w-[100%] h-[100%] flex justify-center items-center rounded-lg right-0">
                        <TailSpinLoader color="white" />
                      </div>
                    )}
                  </button>
                </div>
                <div>
                  <XIcon
                    clicked={handleCloseAllPicturesModal}
                    extraStyle="text-xl dark:text-gray-400"
                  />
                </div>
              </div>
            </div>
            <hr />
            {/*  */}
            <div className="tablet-below:mt-[25px] px-3 py-3 flex justify-center flex-wrap gap-2">
              <div className="tablet-below:w-full big-screen-mobile-below:h-[250px] tablet:h-[400px] tablet-above:w-[48%] tablet-above:h-[340px]">
                <img
                  src={selectedProperty?.propertyPhotos[0].url[4]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[48%] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={selectedProperty?.propertyPhotos[0].url[3]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={selectedProperty?.propertyPhotos[0].url[2]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={selectedProperty?.propertyPhotos[0].url[1]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%]  tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={selectedProperty?.propertyPhotos[0].url[0]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};
