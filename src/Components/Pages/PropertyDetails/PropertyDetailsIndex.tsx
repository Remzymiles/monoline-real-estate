import { Link, useSearchParams } from "react-router-dom";
import { useProperties } from "../../../base/hooks/useFetchAllProperties";
import { useFetchCartProperties } from "../../../base/hooks/useFetchCartProperties";
import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/useHandleIsShowAllPicturesClicked";
import { useHandlePushCartProperties } from "../../../base/hooks/useHandlePushCartProperties";
import { IProperty } from "../../../base/interface/IProperty";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";
import { PropertyPicturesLoadingSkeleton } from "../../Global/Loaders/PropertyPicturesLoadingSkeleton";
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
  useFetchCartProperties();

  const { pushCartProperties } = useHandlePushCartProperties();

  const [query] = useSearchParams();
  const propertyId = query.get("id");

  const { data: properties, isLoading, isError } = useProperties();

  const { updateCheckoutIds, setIsPropertyFromCart } = useCheckoutStore(
    (state) => ({
      updateCheckoutIds: state.updateCheckoutIds,
      setIsPropertyFromCart: state.setIsPropertyFromCart,
    })
  );

  if (isLoading) {
    return <PropertyPicturesLoadingSkeleton />;
  }

  if (isError || !properties) {
    return <div>No properties available</div>;
  }

  const selectedProperty = properties.find((property: IProperty) => {
    return property.property_id === propertyId;
  });

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  const similarProperties = properties.filter((similarProperty: IProperty) => {
    return (
      similarProperty.propertyLocation.city ===
        selectedProperty.propertyLocation.city &&
      similarProperty.property_id !== selectedProperty?.property_id
    );
  });

  const addPropertyToCart = async () => {
    await pushCartProperties(propertyId as string);
  };
  //
  return (
    <div className="relative min-h-fit">
      <ShowAllPicturesModal
        propertyId={String(propertyId)}
        isShowPicturesClicked={isShowPicturesClicked}
        handleCloseAllPicturesModal={handleCloseAllPicturesModal}
        selectedProperty={selectedProperty}
      />
      <div className="pt-3 mobile:mx-4 tablet:mx-8 big-screen-mobile-below:mt-[150px] tablet-above:mt-[180px] mt-[180px] laptop:mt-[120px] tablet-above:mx-8 laptop:mx-16">
        <div className="tablet-below:relative">
          <div className="mb-3">
            {isLoading ? (
              <PropertyPicturesLoadingSkeleton />
            ) : (
              <PropertyPictures
                handleOpenAllPicturesModal={handleOpenAllPicturesModal}
                selectedProperty={selectedProperty}
                propertyId={String(propertyId)}
              />
            )}

            <div className="flex tablet-below:flex-col justify-center tablet-above:gap-x-16 mt-4">
              <div className="flex tablet-below:justify-between big-screen-mobile-below:flex-col tablet-above:gap-x-28 tablet-below:mb-5">
                <div className="big-screen-mobile-below:mb-3">
                  <h1 className="text-xl font-extrabold tracking-wider">
                    {selectedProperty?.propertyLocation.address}
                  </h1>
                  <p className="text-xs mb-3">
                    {selectedProperty?.propertyLocation.city}
                  </p>
                  <div className="mt-1 flex gap-3">
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <BedIcon extraStyle="text-gray-500 text-[10px]" />
                      <span className="font-extrabold">
                        {selectedProperty?.propertyDetails.beds}
                      </span>
                      bd
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <BathIcon extraStyle="text-gray-500 text-[10px]" />
                      <span className="font-extrabold">
                        {selectedProperty?.propertyDetails.baths}
                      </span>
                      ba
                    </span>
                    <span className="flex gap-1 text-sm text-secondaryColor-dark dark:text-gray-400">
                      <SquareFootIcon extraStyle="fill-gray-500 w-[20px] h-[20px] mt-[2px]" />
                      <span className="font-extrabold">
                        {selectedProperty?.propertyDetails.sqft.toLocaleString()}
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
              <div className="tablet-below:w-full bg-white tablet-above:border dark:border-gray-400/20 rounded-md tablet-above:px-5 pt-3 flex flex-col dark:bg-secondaryColor-dark/10">
                <button
                  className="transition-all capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 text-sm"
                  onClick={addPropertyToCart}
                >
                  Add property to cart
                </button>
                <Link
                  to={"/checkout"}
                  className="capitalize bg-primaryColor-light hover:bg-primaryColor-dark dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 transition-all duration-300 text-white dark:text-gray-300 font-bold mt-2 rounded-md px-10 py-2 mb-3 text-sm text-center"
                  onClick={() => {
                    updateCheckoutIds(String(propertyId));
                    setIsPropertyFromCart(false);
                  }}
                >
                  Buy now
                </Link>
              </div>
            </div>
          </div>
          <div className="big-screen-laptop:max-w-[1000px] mt-10 m-auto">
            <div>
              <h1 className="text-xl font-extrabold capitalize mb-3">
                description
              </h1>
              <p>{selectedProperty?.description}</p>
            </div>
            <PropertyHighlights selectedProperty={selectedProperty} />
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
