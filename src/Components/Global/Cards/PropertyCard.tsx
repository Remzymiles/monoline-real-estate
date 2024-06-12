import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IProperty } from "../../../Layouts/interface/IProperty";
import { useHandleFilterProperties } from "../../../base/hooks/homepage/useHandleFilterProperties";
import { useHandlePushWishlistProperties } from "../../../base/hooks/wishlistPage/useHandlePushWishlistProperties";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { PropertyCardLoadingSkeleton } from "../Loaders/PropertyCardLoadingSkeleton";
import { TailSpinLoader } from "../Loaders/TailSpinLoader";
import { useHandleIsPropertyInWishlist } from "../../../base/store/wishlistPage/useHandleIsPropertyInWishlistStore";

export const PropertyCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  //
  const { filteredProperties, filterOptions, isLoading } =
    useHandleFilterProperties();
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
  //

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [filterOptions]);
  //
  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

  useEffect(() => {
    const fetchWishlistStatuses = async () => {
      if (!filteredProperties) return;
      for (const property of filteredProperties) {
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
    filteredProperties,
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
    <>
      {isLoading ? (
        Array.from({ length: 24 }).map((_, index) => (
          <PropertyCardLoadingSkeleton key={index} />
        ))
      ) : filteredProperties.length > 0 ? (
        filteredProperties.map((property: IProperty, index) => (
          <div
            key={property.property_id}
            className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card relative"
          >
            <Link
              to={`/property-details/address=${property.propertyLocation?.address}&city=${property.propertyLocation?.city}&state=${property.propertyLocation?.state}&country=${property.propertyLocation?.country}&?id=${property.property_id}`}
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
                  {property.propertyPhotos?.map((photo) => {
                    return photo.url
                      .slice()
                      .reverse()
                      .map((url, photoIndex) => (
                        <SwiperSlide key={photoIndex}>
                          <img
                            src={url}
                            alt="image"
                            className="w-full h-[270px] rounded-xl object-cover"
                          />
                        </SwiperSlide>
                      ));
                  })}
                </Swiper>
              </div>
              <div className="mt-1 mx-1">
                <div className="flex justify-between">
                  <h1 className="font-bold tracking-wider">
                    ${property.price?.toLocaleString()}
                  </h1>
                  <p className="text-[11px] bg-primaryColor-cream m-1 py-[2px] px-1 rounded-md uppercase dark:text-black">
                    for sale
                  </p>
                </div>
                <div className="mt-1 flex gap-3">
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <BedIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">
                      {property.propertyDetails?.beds}
                    </span>
                    bd
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">
                      {property.propertyDetails?.baths}
                    </span>
                    ba
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                    <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                    <span className="font-extrabold">
                      {property.propertyDetails?.sqft?.toLocaleString()}
                    </span>
                    sqft
                  </span>
                </div>
                <p className="capitalize text-[15px]">
                  {property.propertyLocation?.address}
                </p>
                <p className="text-[15px]">{property.propertyLocation?.city}</p>
              </div>
            </Link>
            <div
              className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full cursor-pointer ${
                propertiesInWishlist[property.property_id]
                  ? "bg-white/70"
                  : "bg-white/30"
              }`}
              onClick={() => {
                handleAddToWishlist(property.property_id);
              }}
            >
              <HeartIcon
                color={`${
                  propertiesInWishlist[property.property_id]
                    ? "text-primaryColor-light dark:text-primaryColorDarkMode"
                    : "text-white"
                }`}
              />
              {IsPushWishlistPropertiesLoading[property.property_id] && (
                <div className="absolute top-0 bg-slate-100 w-[100%] h-[100%] flex justify-center items-center rounded-full right-[1px]">
                  <TailSpinLoader extraStyle="" color="#6C744A" />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="font-bold text-xl m-auto capitalize">
          No properties match the selected filters.
        </p>
      )}
    </>
  );
};
