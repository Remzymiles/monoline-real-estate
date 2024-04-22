import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Properties from "../../../base/dummyData/properties.json";
import { useFilterStore } from "../../../base/store/useFilterStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const PropertyCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const { filterOptions } = useFilterStore((state) => ({
    filterOptions: state.filterOptions,
  }));

  const filterProperties = () => {
    const {
      selectedBeds,
      selectedBaths,
      selectedCity,
      selectedPrice,
      selectedState,
    } = filterOptions;

    return Properties.filter((property) => {
      if (selectedCity && property.location.city !== selectedCity) {
        return;
      }
      //
      if (selectedState && property.location.state !== selectedState) {
        return;
      }
      //
      if (selectedBeds && property.details.beds !== selectedBeds) {
        return;
      }
      //
      if (selectedBaths && property.details.baths !== selectedBaths) {
        return;
      }
      //
      if (selectedPrice && typeof selectedPrice === "object") {
        const { min, max } = selectedPrice;
        if (property.price < min || property.price > max) {
          return;
        }
      }
      //
      return true;
    });
  };

  const filteredProperties = filterProperties();
  //
  return (
    <>
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property, index) => (
          <Link
            to={`/property-details/address=${property.location.address}&city=${property.location.city}&state=${property.location.state}&country=${property.location.country}&?id=${property.property_id}`}
            key={index}
            className="big-screen-mobile-below:w-full between-mobile-and-tablet:w-[240px] tablet-above:w-[250px] property-card"
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

              <div className="absolute top-3 right-3 z-10">
                <HeartIcon color="text-primaryColor-dark" />
              </div>
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
                  {property.details.beds}bd
                </span>
                <span className="flex gap-1 text-sm text-secondaryColor-dark">
                  <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                  {property.details.baths}ba
                </span>
                <span className="flex gap-1 text-sm text-secondaryColor-dark">
                  <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                  {property.details.sqft.toLocaleString()} sqft
                </span>
              </div>
              <p className="capitalize text-[15px]">
                {property.location.address}
              </p>
              <p className="text-[15px]">{property.location.city}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="font-bold text-xl m-auto capitalize">
          No properties match the selected filters.
        </p>
      )}
    </>
  );
};
