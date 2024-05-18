import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import properties from "../../../base/dummyData/properties.json";
import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/useHandleIsShowAllPicturesClicked";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { BathIcon } from "../../Icons/BathIcon";
import { BedIcon } from "../../Icons/BedIcon";
import { SquareFootIcon } from "../../Icons/SquareMeterIcon";
import { PropertyHighlights } from "./PropertyHighlights";
import { PropertyPictures } from "./PropertyPictures";
import { ShowAllPicturesModal } from "./ShowAllPicturesModal";
import { SimilarProperties } from "./SimilarProperties";

export const PropertyDetailsIndex = () => {
  const [showMessage, setShowMessage] = useState(false);
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
    return (
      similarProperty.location.city === selectedProperty?.location.city &&
      similarProperty.property_id !== selectedProperty?.property_id
    );
  });
  //
  const { propertyIds, updatePropertyId } = useCartPropertyIdsStore(
    (state) => ({
      propertyIds: state.propertyIds,
      updatePropertyId: state.updateCartPropertyIds,
    })
  );
  //

  const addPropertyToCart = () => {
    if (!propertyIds.includes(Number(propertyId))) {
      updatePropertyId(Number(propertyId));
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };
  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      updateCheckoutIds: state.updateCheckoutIds,
      setIsPropertyFromCart: state.setIsPropertyFromCart,
    })
  );

  //
  return (
    <div className="relative">
      <ShowAllPicturesModal
        propertyId={Number(propertyId)}
        isShowPicturesClicked={isShowPicturesClicked}
        handleCloseAllPicturesModal={handleCloseAllPicturesModal}
        selectedProperty={selectedProperty}
      />
      {/*  */}
      <div className="pt-3 mobile:mx-4 tablet:mx-8 big-screen-mobile-below:mt-[150px] tablet-above:mt-[180px] mt-[180px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
        <div className="tablet-below:relative">
          <div className="mb-3">
            <PropertyPictures
              showMessage={showMessage}
              handleOpenAllPicturesModal={handleOpenAllPicturesModal}
              selectedProperty={selectedProperty}
              propertyId={Number(propertyId)}
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
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <BedIcon extraStyle="text-gray-500 text-[10px]" />{" "}
                      <span className="font-extrabold">
                        {selectedProperty?.details.beds}
                      </span>
                      bd
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <BathIcon extraStyle="text-gray-500 text-[10px]" />{" "}
                      <span className="font-extrabold">
                        {selectedProperty?.details.baths}
                      </span>
                      ba
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                      <span className="font-extrabold">
                        {selectedProperty?.details.sqft.toLocaleString()}
                      </span>
                      sqft
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="font-extrabold text-xl tracking-wider">
                    ${selectedProperty?.price.toLocaleString()}
                  </h1>
                  <p className="text-xs">
                    Est. Mortgage{" "}
                    <span className="font-extrabold">
                      ${selectedProperty?.mortgage.toLocaleString()}
                    </span>
                    /mo*
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="tablet-below:w-full bg-white tablet-above:border dark:border-gray-400/20 rounded-md tablet-above:px-5 pt-3 flex flex-col dark:bg-secondaryColor-dark/10">
                <button
                  className="transition-all capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 text-sm"
                  onClick={addPropertyToCart}
                >
                  Add to property cart
                </button>
                <Link
                  to={"/checkout"}
                  className="capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-all duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 mb-3 text-sm text-center"
                  onClick={() => {
                    updateCheckoutIds(Number(propertyId));
                    setIsPropertyFromCart(false);
                  }}
                >
                  Buy now
                </Link>
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
