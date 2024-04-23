import { useHandleIsShowAllPicturesClicked } from "../../../base/hooks/useHandleIsShowAllPicturesClicked";
import { IProperty } from "../../../base/interface/IProperty";
import { HeartIcon } from "../../Icons/HeartIcon";
import { XIcon } from "../../Icons/XIcon";



export const ShowAllPicturesModal = ({selectedProperty}:{selectedProperty?:IProperty}) => {
    // 
    const {
        isShowPicturesClicked,
        handleCloseAllPicturesModal,
      } = useHandleIsShowAllPicturesClicked();
  return (
    <>
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
    </>
  );
};
