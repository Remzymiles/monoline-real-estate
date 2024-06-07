import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { ISimilarProperty } from "../../../base/interface/ISimilarProperties";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const SimilarProperties = ({
  selectedProperty,
  similarProperties,
}: ISimilarProperty) => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //
  const { pushWishlistProperties, checkIfPropertyExistsInWishlist } =
    useHandlePushWishlistProperties();

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
        <div className="flex min-w-full overflow-auto gap-x-4 pb-5">
          {similarProperties.map((property, index) => {
            const isPropertyInWishlist =
              propertiesInWishlist[property.property_id];

            return (
              <div
                key={index}
                className="big-screen-mobile-below:w-[220px] between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card relative"
              >
                <Link
                  to={`/property-details/address=${property.propertyLocation.address}&city=${property.propertyLocation.city}&state=${property.propertyLocation.state}&country=${property.propertyLocation.country}&?id=${property.property_id}`}
                  key={index}
                  className="big-screen-mobile-below:w-[220px] between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-full big-screen-mobile-below:h-[200px] h-[270px] relative">
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
                                className="w-full big-screen-mobile-below:h-[200px] h-[270px] rounded-xl object-cover"
                              />
                            </SwiperSlide>
                          ));
                      })}
                    </Swiper>
                  </div>
                  <div className="mt-1 mx-1">
                    <div className="flex justify-between">
                      <h1 className="font-bold tracking-wider">
                        ${property.price.toLocaleString()}
                      </h1>
                      <p className="text-[11px] bg-primaryColor-cream m-1 py-[2px] px-1 rounded-md uppercase text-black">
                        for sale
                      </p>
                    </div>
                    <div className="mt-1 flex gap-[2px]">
                      <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                        <BedIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                        <span className="font-extrabold">
                          {property.propertyDetails.beds}
                        </span>
                        bd
                      </span>
                      <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                        <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                        <span className="font-extrabold">
                          {property.propertyDetails.baths}
                        </span>
                        ba
                      </span>
                      <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                        <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                        <span className="font-extrabold">
                          {property.propertyDetails.sqft.toLocaleString()}
                        </span>
                        sqft
                      </span>
                    </div>
                    <p className="capitalize text-[15px]">
                      {property.propertyLocation.address}
                    </p>
                    <p className="text-[15px]">
                      {property.propertyLocation.city}
                    </p>
                  </div>
                </Link>
                <div
                  className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full cursor-pointer ${
                    isPropertyInWishlist ? "bg-white/70" : "bg-white/30"
                  }`}
                  onClick={() => {
                    handleAddToWishlist(property.property_id);
                  }}
                >
                  <HeartIcon
                    color={`${
                      isPropertyInWishlist
                        ? "text-primaryColor-light dark:text-primaryColorDarkMode"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
