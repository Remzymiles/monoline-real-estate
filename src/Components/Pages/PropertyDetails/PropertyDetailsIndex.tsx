import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import properties from "../../../base/dummyData/properties.json";
import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/useHandleIsShowAllPicturesClicked";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { CalculatorIcon } from "../../Icons/CalculatorIcon";
import { CalenderIcon } from "../../Icons/CalenderIcon";
import { DeckIcon } from "../../Icons/DeckIcon";
import { HeartIcon } from "../../Icons/HeartIcon";
import { ParkingIcon } from "../../Icons/ParkingIcon";
import { PhotoIcon } from "../../Icons/PhotoIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { TemperatureIcon } from "../../Icons/TemperatureIcon";
import { XIcon } from "../../Icons/XIcon";

export const PropertyDetailsIndex = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const {
    isShowPicturesClicked,
    handleOpenAllPicturesModal,
    handleCloseAllPicturesModal,
  } = useHandleIsShowAllPicturesClicked();
  //
  const [query] = useSearchParams();
  const propertyId = query.get("id");
  //
  const selectedProperty = properties.find((property) => {
    return property.property_id === Number(propertyId);
  });
  //
  const similarProperties = properties.filter((similarProperty) => {
    return selectedProperty?.location.city === similarProperty.location.city;
  });
  const pricePerSquareFoot =
    selectedProperty &&
    selectedProperty.details &&
    selectedProperty.details.sqft
      ? selectedProperty.price / selectedProperty.details.sqft
      : 0;

  return (
    <div>
      <div
        className={`absolute bg-black/30 w-[100%] h-[100vh] flex justify-center tablet-below:items-end tablet-above:items-center right-0 top-0 z-50 ${
          isShowPicturesClicked ? "block" : "hidden"
        }`}
        onClick={handleCloseAllPicturesModal}
      >
        <div className="bg-white tablet-below:w-full between-mobile-and-tablet:h-[70%] h-[90%] tablet-above:w-[95%] overflow-auto">
          <div className="flex justify-between big-screen-mobile-below:items-center px-3 py-3 bg-white w-full tablet-below:fixed big-screen-mobile-below:top-10 between-mobile-and-tablet:top-[210px] tablet-below:rounded-xl">
            <div className="capitalize font-bold text-center hidden big-screen-mobile-below:block text-sm">
              photos ({selectedProperty?.photos.length})
            </div>
            <div className="flex gap-x-1 text-sm items-center big-screen-mobile-below:hidden">
              <p className="font-bold">
                {selectedProperty?.location.address} |
              </p>
              <p className="font-bold">
                ${selectedProperty?.price.toLocaleString()} |
              </p>
              <p className="font-bold">{selectedProperty?.details.beds}bd</p>
              <p className="font-bold">{selectedProperty?.details.baths}ba</p>
            </div>
            <div className="flex gap-7 justify-center items-center">
              <div>
                <div className="capitalize border border-gray-200 flex gap-2 transition-all duration-300 bg-white hover:bg-gray-200  text-primaryColor-dark px-4 py-2 rounded-lg font-bold text-sm">
                  <HeartIcon color="text-primaryColor-dark text-sm" />
                  save
                </div>
              </div>
              <div>
                <XIcon
                  clicked={handleCloseAllPicturesModal}
                  extraStyle="text-xl"
                />
              </div>
            </div>
          </div>
          <hr />
          {/*  */}
          <div className="tablet-below:mt-[25px] px-3 py-3 flex justify-center flex-wrap gap-2">
            <div className="tablet-below:w-full tablet-below:h-[300px] tablet:h-[400px] tablet-above:w-[48%] tablet-above:h-[340px]">
              <img
                src={selectedProperty?.photos[0]}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
            {/*  */}
            <div className="tablet-above:w-[48%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
              <img
                src={selectedProperty?.photos[1]}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
            {/*  */}
            <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
              <img
                src={selectedProperty?.photos[2]}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
            {/*  */}
            <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
              <img
                src={selectedProperty?.photos[3]}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
            {/*  */}
            <div className="tablet-above:w-[31.8%]  tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
              <img
                src={selectedProperty?.photos[4]}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" pt-3 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-16">
        <div className="tablet-below:relative">
          <div className="mb-3">
            <div className="flex justify-center items-center gap-3 tablet-below:gap-0">
              <div className="w-[700px] h-[500px] big-screen-mobile-below:h-[300px] relative tablet-below:w-full">
                <p className="uppercase bg-white px-[5px] absolute top-2 left-3 rounded-sm font-bold text-primaryColor-dark text-[10px]">
                  for sale
                </p>
                <div className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm tablet-above:hidden">
                  <HeartIcon color="text-primaryColor-dark text-sm" />
                  save
                </div>
                <div
                  className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white tablet-above:hidden mobile:text-xs"
                  onClick={() => {
                    handleOpenAllPicturesModal();
                  }}
                >
                  <PhotoIcon extraStyle="text-primaryColor-dark" />
                  show all photos
                </div>
                <img
                  src={selectedProperty?.photos[0]}
                  alt="img"
                  className="w-[100%] h-[100%] rounded-l-lg tablet-below:rounded-md big-screen-mobile-below:object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-[300px] h-[243px] relative tablet-below:hidden">
                  <div className="capitalize absolute top-2 right-2 flex gap-2 bg-white text-primaryColor-dark px-3 py-1 rounded-sm font-bold text-sm">
                    <HeartIcon color="text-primaryColor-dark text-sm" />
                    save
                  </div>
                  <img
                    src={selectedProperty?.photos[1]}
                    alt="img"
                    className="w-[100%] h-[100%] rounded-tr-lg"
                  />
                </div>
                <div className="w-[300px] h-[243px] relative tablet-below:hidden">
                  <div
                    className="absolute bottom-2 right-2 bg-white/90 text-sm flex gap-2 p-2 capitalize rounded-sm hover:bg-white"
                    onClick={() => {
                      handleOpenAllPicturesModal();
                    }}
                  >
                    <PhotoIcon extraStyle="text-primaryColor-dark" />
                    show all photos
                  </div>
                  <img
                    src={selectedProperty?.photos[2]}
                    alt="img"
                    className="w-[100%] h-[100%] rounded-br-lg"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex tablet-below:flex-col justify-center tablet-above:gap-x-16 mt-4">
              <div className="flex tablet-below:justify-between big-screen-mobile-below:flex-col tablet-above:gap-x-28 tablet-below:mb-5">
                <div className="big-screen-mobile-below:mb-3">
                  <h1 className="text-xl font-extrabold tracking-wider">
                    {selectedProperty?.location.address}
                  </h1>
                  <p className="text-xs mb-3">
                    {selectedProperty?.location.city}
                  </p>
                  <div className="mt-1 flex gap-3">
                    <span className="flex gap-1 text-sm text-secondaryColor-dark">
                      <BedIcon extraStyle="text-gray-500 text-[10px]" />{" "}
                      {selectedProperty?.details.beds}bd
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark">
                      <BathIcon extraStyle="text-gray-500 text-[10px]" />{" "}
                      {selectedProperty?.details.baths}ba
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark">
                      <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                      {selectedProperty?.details.sqft.toLocaleString()}sqft
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-extrabold text-xl tracking-wider">
                    ${selectedProperty?.price.toLocaleString()}
                  </h1>
                  <p className="text-xs">
                    Est. Mortgage ${selectedProperty?.mortgage.toLocaleString()}
                    /mo*
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="tablet-below:w-full bg-white tablet-above:border rounded-md tablet-above:px-5 pt-3 flex flex-col">
                <button className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 text-sm">
                  Inspect The property
                </button>
                <button className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 text-sm">
                  Add to cart
                </button>
                <button className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 mb-3 text-sm">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="big-screen-laptop:max-w-[1000px] mt-10 m-auto">
            <div className="">
              <h1 className="text-xl font-extrabold capitalize mb-3">
                description
              </h1>
              <p>{selectedProperty?.description}</p>
            </div>
            {/*  */}
            <div className="border mt-5 px-3 pt-2 rounded-md">
              <h1 className="capitalize font-extrabold mb-5">
                home highlights
              </h1>
              <div className="grid tablet-below:grid-cols-1 grid-cols-2">
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                    <ParkingIcon extraStyle="text-gray-500" /> parking
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    garage
                  </span>
                </div>
                {/*  */}
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                    <DeckIcon extraStyle="fill-gray-500" /> outdoor
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    Patio, Pool
                  </span>
                </div>
                {/*  */}
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                    <TemperatureIcon extraStyle="text-gray-500" /> A/C
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    Heating & Cooling
                  </span>
                </div>
                {/*  */}
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                    <CalculatorIcon extraStyle="text-gray-500" /> HOA
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    $104/Monthly
                  </span>
                </div>
                {/*  */}
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-1 text-sm">
                    <SquareFootIcon extraStyle="fill-gray-500 h-[15px] w-[15px] mt-1" />{" "}
                    Price/Sqft
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    ${pricePerSquareFoot.toFixed()}
                  </span>
                </div>
                {/*  */}
                <div className="flex gap-x-16 mb-3">
                  <span className="capitalize flex tablet-below:gap-0 gap-2 text-sm">
                    <CalenderIcon extraStyle="text-gray-500" /> Listed
                  </span>
                  <span className="capitalize font-extrabold text-sm mobile:text-xs">
                    {" "}
                    3 days ago
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="my-5">
              <h1 className="font-bold text-xl capitalize">
                new listings near 5865 Winterthur Dr NW
              </h1>
              <div className="flex justify-center overflow-x-auto gap-5 min-h-[50vh]">
                {similarProperties.map((property, index) => {
                  return(
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
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
