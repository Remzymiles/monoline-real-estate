import { IProperty } from "../../../Layouts/interface/IProperty";

export const ClickedCheckoutPropertyPhotos = ({
  clickedCheckoutProperty,
}: {
  clickedCheckoutProperty: IProperty | undefined;
}) => {
  return (
    <div className="tablet-below:mt-[25px] px-3 py-3 flex justify-center flex-wrap gap-2">
      <div className="tablet-below:w-full big-screen-mobile-below:h-[250px] tablet:h-[400px] tablet-above:w-[48%] tablet-above:h-[340px]">
        <img
          src={clickedCheckoutProperty?.propertyPhotos[0].url[4]}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/*  */}
      <div className="tablet-above:w-[48%] tablet:w-[49%] tablet-above:h-[340px]">
        <img
          src={clickedCheckoutProperty?.propertyPhotos[0].url[3]}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/*  */}
      <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
        <img
          src={clickedCheckoutProperty?.propertyPhotos[0].url[2]}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/*  */}
      <div className="tablet-above:w-[31.8%] tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
        <img
          src={clickedCheckoutProperty?.propertyPhotos[0].url[1]}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/*  */}
      <div className="tablet-above:w-[31.8%]  tablet:h-[300px] tablet:w-[49%] tablet-above:h-[340px]">
        <img
          src={clickedCheckoutProperty?.propertyPhotos[0].url[0]}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>
      {/*  */}
    </div>
  );
};
