import { useSearchParams } from "react-router-dom";
import { IProperty } from "../../../Layouts/interface/IProperty";
import { useFetchCartProperties } from "../../../base/hooks/cartpage/useFetchCartProperties";
import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/cartpage/useHandleIsShowAllPicturesClicked";
import { PropertyPicturesLoadingSkeleton } from "../../Global/Loaders/PropertyPicturesLoadingSkeleton";
import { PropertyDetails } from "./PropertyDetails";
import { PropertyHighlights } from "./PropertyHighlights";
import { PropertyPictures } from "./PropertyPictures";
import { ShowAllPicturesModal } from "./ShowAllPicturesModal";
import { SimilarProperties } from "./SimilarProperties";
import { useAllProperties } from "../../../base/hooks/useFetchAllProperties";

export const PropertyDetailsIndex = () => {
  const {
    isShowPicturesClicked,
    handleOpenAllPicturesModal,
    handleCloseAllPicturesModal,
  } = useHandleIsShowAllPicturesClicked();
  //
  useFetchCartProperties();

  const [query] = useSearchParams();
  const propertyId = query.get("id");

  const { data: properties, isLoading, isError } = useAllProperties();

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

            <PropertyDetails
              propertyId={propertyId}
              selectedProperty={selectedProperty}
            />
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
