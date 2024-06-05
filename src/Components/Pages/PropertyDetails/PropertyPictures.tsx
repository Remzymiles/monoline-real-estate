import { useEffect, useState } from "react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { IPropertyPictures } from "../../../base/interface/IPropertyPictures";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { getAuthData } from "../../../base/utils/getAuthData";
import { HeartIcon } from "../../Icons/HeartIcon";
import { PhotoIcon } from "../../Icons/PhotoIcon";

export const PropertyPictures = ({
  handleOpenAllPicturesModal,
  selectedProperty,
  propertyId,
}: IPropertyPictures) => {
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

  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      const exists = await checkIfPropertyExistsInWishlist(userId, propertyId);
      setIsPropertyInWishlist(propertyId, exists);
    };

    if (userId) {
      fetchWishlistStatus();
    }
  }, [
    userId,
    propertyId,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);

  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };

  const isPropertyInWishlist = propertiesInWishlist[propertyId];

  return (
    <>
      <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
        <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
          <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark dark:text-primaryColorDarkMode text-[10px]">
            for sale
          </p>
          <div
            className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden ${
              isPropertyInWishlist
                ? "bg-primaryColor-dark dark:bg-primaryColorDarkMode text-white"
                : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
            }`}
            onClick={() => handleAddToWishlist(propertyId)}
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
            src={selectedProperty?.propertyPhotos[0]?.url[4]}
            alt="img"
            className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-[300px] h-[243px] relative tablet-below:hidden">
            <div
              className={`capitalize absolute top-2 right-2 flex gap-2 px-3 py-1 rounded-sm font-bold text-sm ${
                isPropertyInWishlist
                  ? "bg-primaryColor-dark dark:bg-primaryColorDarkMode text-white"
                  : "bg-white text-primaryColor-dark dark:text-primaryColorDarkMode"
              }`}
              onClick={() => handleAddToWishlist(propertyId)}
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
            <img
              src={selectedProperty?.propertyPhotos[0]?.url[3]}
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
