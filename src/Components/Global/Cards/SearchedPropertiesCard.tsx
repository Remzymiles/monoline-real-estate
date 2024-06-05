import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHandlePushWishlistProperties } from "../../../base/hooks/useHandlePushWishlistProperties";
import { IProperty } from "../../../base/interface/IProperty";
import { useHandleIsPropertyInWishlist } from "../../../base/store/useHandleIsPropertyInWishlistStore";
import { useProperties } from "../../../base/utils/fetchProperties";
import { getAuthData } from "../../../base/utils/getAuthData";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { WaveFormLoader } from "../Loaders/WaveFormLoader";

export const SearchedPropertiesCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

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

  const [query] = useSearchParams();
  const searchValue = query.get("search");

  const { data: properties, isLoading } = useProperties();

  const { propertiesInWishlist, setIsPropertyInWishlist } =
    useHandleIsPropertyInWishlist((state) => ({
      propertiesInWishlist: state.propertiesInWishlist,
      setIsPropertyInWishlist: state.setIsPropertyInWishlist,
    }));

  const filteredSearchedProperties = searchValue
    ? properties?.filter((property: IProperty) => {
        return (
          property.propertyLocation.state
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          property.propertyLocation.city
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      })
    : [];

  useEffect(() => {
    const fetchWishlistStatuses = async () => {
      if (!filteredSearchedProperties) return;
      for (const property of filteredSearchedProperties) {
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
    filteredSearchedProperties,
    checkIfPropertyExistsInWishlist,
    setIsPropertyInWishlist,
  ]);

  const handleAddToWishlist = async (propertyId: string) => {
    await pushWishlistProperties(propertyId);
  };

  return (
    <>
      {isLoading && (
        <div>
          <WaveFormLoader />
        </div>
      )}
      {filteredSearchedProperties && filteredSearchedProperties?.length > 0 ? (
        filteredSearchedProperties.map((property: IProperty, index) => (
          <div
            key={index}
            className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card relative"
          >
            <Link
              to={`/property-details/address=${property.propertyLocation.address}&city=${property.propertyLocation.city}&state=${property.propertyLocation.state}&country=${property.propertyLocation.country}&?id=${property.property_id}`}
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
                  {property.propertyPhotos?.map((photo) =>
                    photo.url
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
                      ))
                  )}
                </Swiper>
              </div>
              <div className="mt-1 mx-1">
                <div className="flex justify-between">
                  <h1 className="font-bold tracking-wider">
                    ${property.price.toLocaleString()}
                  </h1>
                  <p className="text-[11px] bg-primaryColor-cream text-black m-1 py-[2px] px-1 rounded-md uppercase">
                    for sale
                  </p>
                </div>
                <div className="mt-1 flex gap-3">
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
                <p className="text-[15px]">{property.propertyLocation.city}</p>
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
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg capitalize font-bold flex justify-center items-center text-center">
          your search did not match any properties. try again &#128578;
        </p>
      )}
    </>
  );
};
