import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import properties from "../../../base/dummyData/properties.json";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const SearchedPropertiesCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  //
  const [query] = useSearchParams();
  const searchValue = query.get("search");

  const { wishlistPropertyIds, updateWishlistPropertyId } = useWishListStore(
    (state) => ({
      wishlistPropertyIds: state.wishlistPropertyIds,
      updateWishlistPropertyId: state.updateWishlistPropertyIds,
    })
  );
  //
  useEffect(() => {
    console.log(wishlistPropertyIds);
  }, [wishlistPropertyIds]);
  //
  const filteredSearchedProperties = searchValue
    ? properties.filter((property) => {
        return (
          property.location.state
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          property.location.city
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      })
    : [];
  //
  const handleAddToWishlist = ( propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : null;
  };
  //
  return (
    <>
      {filteredSearchedProperties.length > 0 ? (
        filteredSearchedProperties.map((property, index) => (
          <div
            key={index}
            className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card relative"
          >
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
                  <p className="text-[11px] bg-primaryColor-cream m-1 py-[2px] px-1 rounded-md uppercase">
                    for sale
                  </p>
                </div>
                <div className="mt-1 flex gap-3">
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <BedIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">
                      {property.details.beds}
                    </span>
                    bd
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                    <span className="font-extrabold">
                      {property.details.baths}
                    </span>
                    ba
                  </span>
                  <span className="flex gap-1 text-sm text-secondaryColor-dark">
                    <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                    <span className="font-extrabold">
                      {property.details.sqft.toLocaleString()}
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
              className="absolute top-3 right-3 z-10 bg-white/60 px-2 py-1 rounded-full cursor-pointer"
              onClick={() => {
                handleAddToWishlist( property.property_id);
              }}
            >
              <HeartIcon color="text-primaryColor-dark" />
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
