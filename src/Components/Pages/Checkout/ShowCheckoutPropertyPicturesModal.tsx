import { useEffect, useState } from "react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { IShowCheckoutPropertyPicturesModal } from "../../../base/interface/IShowCheckoutPropertyPicturesModal";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { getAuthData } from "../../../base/utils/getAuthData";
import { HeartIcon } from "../../Icons/HeartIcon";
import { XIcon } from "../../Icons/XIcon";

export const ShowCheckoutPropertyPicturesModal = ({
  clickedCheckoutProperty,
  isShowCheckoutPropertyPicturesClicked,
  handleCloseCheckoutPicturesModal,
  clickedCheckoutPropertyId,
}: IShowCheckoutPropertyPicturesModal) => {
  //
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
  //
  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

  useEffect(() => {
    if (!clickedCheckoutPropertyId) return;
    const fetchWishlistStatuses = async () => {
      const exists = await checkIfPropertyExistsInWishlist(
        userId,
        clickedCheckoutPropertyId
      );
      setIsPropertyInWishlist(clickedCheckoutPropertyId, exists);
    };

    fetchWishlistStatuses();
  }, [
    userId,
    clickedCheckoutProperty,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);
  //

  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };

  const isPropertyInWishlist =
    clickedCheckoutProperty &&
    propertiesInWishlist[clickedCheckoutProperty.property_id];

  //
  return (
    <>
      <div
        className={`absolute bg-black/30 w-[100vw] h-[100%] tablet-above:h-[1000vh] tablet-above:-top-[135px] flex justify-center tablet-below:items-end tablet-above:items-center -right-16 tablet-to-laptop:-right-8 tablet:-right-8 mobile:-right-4 -top-44 z-50 ${
          isShowCheckoutPropertyPicturesClicked ? "block" : "hidden"
        }`}
      >
        <div className="fixed tablet-above:top-10 flex justify-center big-screen-mobile-below:bottom-0 between-mobile-and-tablet:top-[240px]">
          <div className="tablet-below:w-full bg-white dark:bg-secondaryColor-light big-screen-mobile-below:h-[87vh] between-mobile-and-tablet:h-[73vh] h-[90vh] tablet-above:w-[95%] overflow-auto">
            <div className="flex justify-between mobile:items-center px-3 py-3 bg-white dark:bg-secondaryColor-light w-full tablet-below:fixed big-screen-mobile-below:top-11 between-mobile-and-tablet:top-[185px] tablet-below:rounded-t-xl">
              <div className="capitalize font-bold text-center hidden mobile:block text-sm">
                photos ({clickedCheckoutProperty?.propertyPhotos[0].url.length})
              </div>
              <div className="flex gap-x-1 text-sm items-center mobile:hidden">
                <p className="font-bold">
                  {clickedCheckoutProperty?.propertyLocation.address} |
                </p>
                <p className="font-bold">
                  ${clickedCheckoutProperty?.price.toLocaleString()} |
                </p>
                <p className="font-bold">
                  {clickedCheckoutProperty?.propertyDetails.beds}bd
                </p>
                <p className="font-bold">
                  {clickedCheckoutProperty?.propertyDetails.baths}ba
                </p>
              </div>
              <div className="flex gap-7 justify-center items-center">
                <div>
                  <div
                    className={`capitalize border border-gray-200 flex gap-2 transition-all duration-300 px-4 py-2 rounded-lg font-bold text-sm ${
                      isPropertyInWishlist
                        ? "bg-primaryColor-light text-white hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/90 dark:hover:bg-primaryColorDarkMode"
                        : "bg-white text-primaryColor-dark hover:bg-gray-200"
                    }`}
                    onClick={() =>
                      handleAddToWishlist(String(clickedCheckoutPropertyId))
                    }
                  >
                    <HeartIcon
                      color={`text-sm ${
                        isPropertyInWishlist
                          ? "text-white"
                          : "text-primaryColor-dark dark:text-primaryColorDarkMode"
                      }`}
                    />
                    {isPropertyInWishlist ? "saved" : "save"}
                  </div>
                </div>
                <div>
                  <XIcon
                    clicked={handleCloseCheckoutPicturesModal}
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
                  src={clickedCheckoutProperty?.propertyPhotos[0].url[4]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[48%] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={clickedCheckoutProperty?.propertyPhotos[0].url[3]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={clickedCheckoutProperty?.propertyPhotos[0].url[2]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={clickedCheckoutProperty?.propertyPhotos[0].url[1]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
              <div className="tablet-above:w-[31.8%]  tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
                <img
                  src={clickedCheckoutProperty?.propertyPhotos[0].url[0]}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
