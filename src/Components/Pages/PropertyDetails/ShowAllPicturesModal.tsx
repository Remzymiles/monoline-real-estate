import { IShowAllPicturesModal } from "../../../base/interface/IShowAllPictureModal";
import { HeartIcon } from "../../Icons/HeartIcon";
import { XIcon } from "../../Icons/XIcon";

export const ShowAllPicturesModal = ({
  selectedProperty,
  isShowPicturesClicked,
  handleCloseAllPicturesModal,
}: IShowAllPicturesModal) => {
  //
  return (
    <>
      <div
        className={`absolute bg-black/30 w-[100%] h-[100%] flex justify-center tablet-below:items-end tablet-above:items-center right-0 -top-40 z-50 ${
          isShowPicturesClicked ? "block" : "hidden"
        }`}
      >
        <div className="fixed top-10 flex justify-center big-screen-mobile-below:top-[89px] between-mobile-and-tablet:top-[240px]">
          <div className=" bg-white tablet-below:w-full big-screen-mobile-below:h-[90vh] between-mobile-and-tablet:h-[73vh] h-[90vh] tablet-above:w-[95%] overflow-auto">
            <div className="flex justify-between mobile:items-center px-3 py-3 bg-white w-full tablet-below:fixed big-screen-mobile-below:top-11 between-mobile-and-tablet:top-[185px] tablet-below:rounded-t-xl">
              <div className="capitalize font-bold text-center hidden mobile:block text-sm">
                photos ({selectedProperty?.photos.length})
              </div>
              <div className="flex gap-x-1 text-sm items-center mobile:hidden">
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
      </div>
    </>
  );
};
