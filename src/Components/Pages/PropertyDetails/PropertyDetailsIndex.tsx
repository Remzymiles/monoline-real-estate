import { useSearchParams } from "react-router-dom";
import properties from "../../../base/dummyData/properties.json";
import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/useHandleIsShowAllPicturesClicked";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { PropertyHighlights } from "./PropertyHighlights";
import { PropertyPictures } from "./PropertyPictures";
import { ShowAllPicturesModal } from "./ShowAllPicturesModal";
import { SimilarProperties } from "./SimilarProperties";

export const PropertyDetailsIndex = () => {
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
  //
  const { propertyIds, updatePropertyId } = useCartPropertyIdsStore((state) => ({
    propertyIds: state.propertyIds,
    updatePropertyId: state.updatePropertyIds,
  }));
  //
  const addPropertyToCart = () => {
    !propertyIds.includes(Number(propertyId))
      ? updatePropertyId(Number(propertyId))
      : null;
  };
  //
  return (
    <div className="relative">
      <ShowAllPicturesModal
        isShowPicturesClicked={isShowPicturesClicked}
        handleCloseAllPicturesModal={handleCloseAllPicturesModal}
        selectedProperty={selectedProperty}
      />
      {/*  */}
      <div className=" pt-3 mobile:mx-4 tablet:mx-8 laptop-below:mt-[190px] tablet-above:mt-[120px] tablet-above:mx-8 laptop:mx-16">
        <div className="tablet-below:relative">
          <div className="mb-3">
            <PropertyPictures
              handleOpenAllPicturesModal={handleOpenAllPicturesModal}
              selectedProperty={selectedProperty}
            />
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
                <button
                  className="bg-primaryColor-light hover:bg-primaryColor-dark transition-all duration-300 text-white font-bold mt-2 rounded-md px-10 py-2 text-sm"
                  onClick={addPropertyToCart}
                >
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
            <div>
              <h1 className="text-xl font-extrabold capitalize mb-3">
                description
              </h1>
              <p>{selectedProperty?.description}</p>
            </div>
            {/*  */}
            <PropertyHighlights selectedProperty={selectedProperty} />
            {/*  */}
            <SimilarProperties
              selectedProperty={selectedProperty}
              similarProperties={similarProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
