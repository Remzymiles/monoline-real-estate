import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartIcon } from "../../Icons/HeartIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { BathIcon } from "../../Icons/BathIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { ISimilarProperty } from "../../../base/interface/ISimilarProperties";
import { useState } from "react";

export const SimilarProperties = ({selectedProperty,similarProperties}:ISimilarProperty) => {
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  return (
    <>
      <div className="mt-5">
        <h1 className="font-bold text-2xl capitalize mb-5">
          new listings in {selectedProperty?.location.city}
        </h1>
        <div className="flex min-w-full overflow-auto gap-x-4 pb-5">
          {similarProperties.map((property, index) => {
            return (
              <Link
                to={`/property-details/address=${property.location.address}&city=${property.location.city}&state=${property.location.state}&country=${property.location.country}&?id=${property.property_id}`}
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
                    {property.photos.map((photo, photoIndex) => (
                      <SwiperSlide key={photoIndex}>
                        <img
                          src={photo}
                          alt="image"
                          className="w-full big-screen-mobile-below:h-[200px] h-[270px] rounded-xl object-cover"
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
                      <span className="font-extrabold">{property.details.beds}</span>bd
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark">
                      <BathIcon extraStyle="text-gray-500 text-[15px]" />{" "}
                      <span className="font-extrabold">{property.details.baths}</span>ba
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark">
                      <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                      <span className="font-extrabold">{property.details.sqft.toLocaleString()}</span>sqft
                    </span>
                  </div>
                  <p className="capitalize text-[15px]">
                    {property.location.address}
                  </p>
                  <p className="text-[15px]">{property.location.city}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
