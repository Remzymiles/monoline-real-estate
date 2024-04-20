import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import properties from "../../../base/dummyData/properties.json";
import { useSearchValueStore } from "../../../base/store/useSearchValueStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";

export const SearchedPropertiesCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  //
  const { searchValue } = useSearchValueStore((state) => ({
    searchValue: state.searchValue,
  }));

  const filterSearchedProperties = properties.filter((property) => {
    property.location.state === searchValue
  });
  console.log(filterSearchedProperties);
  

  //
  return (
    <>
      {properties.map((property, index) => (
        <Link
          to={`/property-details/address=${property.location.address}&city=${property.location.city}&state=${property.location.state}&country=${property.location.country}&id=${property.property_id}`}
          key={property.property_id}
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
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
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
      ))}
    </>
  );
};
