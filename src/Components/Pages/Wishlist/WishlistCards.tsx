import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchWishlistProperties } from "../../../base/hooks/useFetchWishlistProperties";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { IWishlistProperty } from "../../../base/interface/IWishlistProperty";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const WishlistCards = () => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const { data: wishlistProperties, isLoading } = useFetchWishlistProperties();
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //
  const { pushWishlistProperties, checkIfPropertyExistsInWishlist } =
    useHandlePushWishlistProperties();
  //
  const { setIsPropertyInWishlist } = useHandleIsPropertyInWishlist(
    (state) => ({
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    })
  );

  //
  useEffect(() => {
    const fetchWishlistStatuses = async () => {
      if (!wishlistProperties) return;
      for (const property of wishlistProperties) {
        if (!userId) return;
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
    wishlistProperties,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);
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
        <WaveFormLoader />
      </div>
      {wishlistProperties &&
        wishlistProperties.length > 0 &&
        wishlistProperties.map((property: IWishlistProperty, index) => (
          <div
            className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[235px] tablet-above:w-[400px] relative"
            key={property.property_id}
          >
            <Link
              to={`/property-details/address=${property.address}&city=${property.city}&state=${property.state}&country=${property.country}&?id=${property.property_id}`}
              className="w-full h-[270px] relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-[270px] relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation={hoveredIndex === index}
                  pagination={{ clickable: true }}
                >
                  {property.property_photo_urls
                    .slice()
                    .reverse()
                    .map((photo, photoIndex) => {
                      return (
                        <SwiperSlide key={photoIndex}>
                          <img
                            src={photo}
                            alt="image"
                            className="w-full h-[270px] rounded-xl object-cover"
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className="mt-1 mx-1">
                <div className="flex justify-between">
                  <h1 className="font-bold tracking-wider">
                    ${property.price.toLocaleString()}
                  </h1>
                  <p className="text-[11px] text-black bg-primaryColor-cream m-1 py-[2px] px-1 rounded-md uppercase">
                    for sale
                  </p>
                </div>
                <div className="mt-1 flex gap-3">
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <BedIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">{property.beds}</span>
                    bd
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">{property.baths}</span>
                    ba
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                    <span className="font-extrabold">{property.sqft}</span>
                    sqft
                  </span>
                </div>
                <p className="capitalize text-[15px]">{property.address}</p>
                <p className="text-[15px]">{property.city}</p>
              </div>
            </Link>
            <div
              className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full cursor-pointer bg-white`}
              onClick={() => {
                handleAddToWishlist(property.property_id);
              }}
            >
              <HeartIcon
                color={`text-primaryColor-dark dark:text-primaryColorDarkMode`}
              />
            </div>
          </div>
        ))}
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
