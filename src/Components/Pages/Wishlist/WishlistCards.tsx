import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import properties from "../../../base/dummyData/properties.json";
import { IProperty } from "../../../base/interface/IProperty";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const WishlistCards = () => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const {
    wishlistPropertyIds,
    updateWishlistPropertyId,
    removeWishlistPropertyId,
  } = useWishListStore((state) => ({
    wishlistPropertyIds: state.wishlistPropertyIds,
    updateWishlistPropertyId: state.updateWishlistPropertyIds,
    removeWishlistPropertyId: state.removeWishlistPropertyId,
  }));
  //
  const handleAddToWishlist = (propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : removeWishlistPropertyId(propertyId);
  };
  const wishlistProperties = properties.filter((property: IProperty) => {
    return wishlistPropertyIds.includes(property.property_id);
  });

  //
  return (
    <div
      className={`tablet-below:flex tablet-below:justify-center tablet-below:flex-wrap tablet-below:gap-5 ${
        wishlistPropertyIds.length > 0
          ? "minMax"
          : " flex justify-center items-center min-h-[30vh]"
      }`}
    >
      {wishlistPropertyIds.length > 0 ? (
        wishlistProperties.map((property, index) => (
          <div className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[235px] tablet-above:w-[400px] relative">
            <Link
              to={`/property-details/address=${property.location.address}&city=${property.location.city}&state=${property.location.state}&country=${property.location.country}&?id=${property.property_id}`}
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
                  {property.photos.map((photo, photoIndex) => (
                    <SwiperSlide key={photoIndex}>
                      <img
                        src={photo}
                        alt="image"
                        className="w-full h-[270px] rounded-xl object-cover"
                      />
                    </SwiperSlide>
                  ))}
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
                    <span className="font-extrabold">
                      {property.details.beds}
                    </span>
                    bd
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">
                      {property.details.baths}
                    </span>
                    ba
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                    <span className="font-extrabold">
                      {property.details.sqft}
                    </span>
                    sqft
                  </span>
                </div>
                <p className="capitalize text-[15px]">
                  {property.location.address}
                </p>
                <p className="text-[15px]">{property.location.city}</p>
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
        ))
      ) : (
        <>
          <p className="text-xl font-extrabold capitalize">
            wishlist is empty. add properties
          </p>
        </>
      )}

      {/*  */}
    </div>
  );
};
