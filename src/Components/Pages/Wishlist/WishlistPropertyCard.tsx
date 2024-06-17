import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IWishlistProperty } from "../../../base/interface/wishlistPage/IWishlistProperty";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { TailSpinLoader } from "../../Global/Loaders/TailSpinLoader";

export const WishlistPropertyCard = ({
  property,
  index,
  handleAddToWishlist,
  IsPushWishlistPropertiesLoading,
}: {
  property: IWishlistProperty;
  index: number;
  handleAddToWishlist: (value: string) => void;
  IsPushWishlistPropertiesLoading: { [propertyId: string]: boolean };
}) => {
  //
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  //
  return (
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
        {IsPushWishlistPropertiesLoading[property.property_id] && (
          <div className="absolute top-0 bg-slate-100 w-[100%] h-[100%] flex justify-center items-center rounded-full right-[1px]">
            <TailSpinLoader extraStyle="" color="#6C744A" />
          </div>
        )}
      </div>
    </div>
  );
};
