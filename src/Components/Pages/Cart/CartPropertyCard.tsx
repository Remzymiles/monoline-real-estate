import Properties from "../../../base/dummyData/properties.json";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { TrashCanIcon } from "../../Icons/TrashCanIcon";
import image from "/images/10994-N-123rd-St-1.webp";

export const CartPropertyCard = () => {
  //
  const { propertyIds } = useCartPropertyIdsStore((state) => ({
    propertyIds: state.propertyIds,
    clearPropertyIds: state.clearPropertyIds,
  }));
  //
  const cartProperties = Properties.filter((property) => {
    return propertyIds.includes(property.property_id);
  });
  //
  const { wishlistPropertyIds, updateWishlistPropertyId } = useWishListStore(
    (state) => ({
      wishlistPropertyIds: state.wishlistPropertyIds,
      updateWishlistPropertyId: state.updateWishlistPropertyIds,
    })
  );

  const handleAddToWishlist = (propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : null;
  };
  //
  return (
    <>
      <div className="flex flex-col big-screen-laptop:flex-row gap-14">
        <div className="big-screen-laptop:w-[60%]">
          <div className="my-3">
            <div className="flex justify-between big-screen-laptop:justify-evenly gap-5 big-screen-mobile-below:flex big-screen-mobile-below:flex-col big-screen-mobile-below:gap-0 mb-3">
              <div className="w-[300px] h-[200px] flex gap-x-4 big-screen-mobile-below:w-[100%] big-screen-mobile-below:h-[250px] big-screen-mobile-below:flex-col big-screen-mobile-below:mb-2">
                <img
                  src={image}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover rounded-md"
                />
              </div>
              {/*  */}
              <div className="py-2 big-screen-mobile-below:block">
                <p className="font-semibold capitalize text-lg mb-2 break-all">
                  uguihiugoghuhilgjojhvjhbhbjhjhj
                </p>
                <p className="font-semibold capitalize text-lg">$1,000,000</p>
              </div>
              {/*  */}
              <div className="flex flex-col justify-between items-end h-[200px] big-screen-mobile-below:w-full py-2 big-screen-mobile-below:h-auto">
                <div className="w-fit big-screen-mobile-below:flex big-screen-mobile-below:w-full bg-primaryColor-light big-screen-mobile-below:py-2 big-screen-mobile-below:justify-center big-screen-mobile-below:gap-x-3 big-screen-mobile-below:items-center big-screen-mobile-below:rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold rounded-full px-[7px] hover:bg-primaryColor-dark transition-colors duration-300">
                  <TrashCanIcon clicked={() => {}} extraStyle="text-white" />{" "}
                  <span className="hidden big-screen-mobile-below:block">
                    remove property
                  </span>
                </div>
                <button
                  className="w-full bg-primaryColor-light big-screen-mobile-below:py-2 py-1 px-2 hover:bg-primaryColor-dark transition-colors duration-300 rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold"
                  onClick={() => {
                    handleAddToWishlist(0);
                  }}
                >
                  save
                </button>
              </div>
            </div>
            <hr />
          </div>
          {/*  */}

          {/*  */}
        </div>

        {/*  */}
        <div className="bg-primaryColor-lightCream  px-3 py-3 big-screen-laptop:w-[30%]">
          <h1 className="capitalize font-bold text-xl mb-4">summary</h1>
          <div>
            <div className="flex justify-around gap-x-4 mb-3">
              <p className="truncate capitalize">
                tfdyhguoijlkkjp okpokokiohoiuhpjpiju8juoijuo
              </p>
              :<p className="font-extrabold">$1,000,000,</p>
            </div>
            {/*  */}
            <div className="flex justify-around gap-x-4 mb-3">
              <p className="truncate capitalize">
                tfdyhguoijlkkjp okpokokiohoiuhpjpiju8juoijuo
              </p>
              :<p className="font-extrabold">$1,000,000,</p>
            </div>
            {/*  */}
            <div className="flex justify-around gap-x-4 mb-3">
              <p className="truncate capitalize">
                tfdyhguoijlkkjp okpokokiohoiuhpjpiju8juoijuo
              </p>
              :<p className="font-extrabold">$1,000,000,</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex justify-between gap-x-4 my-3">
              <p className="capitalize font-bold">balance</p>:
              <p className="font-extrabold break-all">$1,000,000,000,000</p>
            </div>
            <button className="bg-primaryColor-light w-full py-2 rounded-md capitalize text-white text-lg font-extrabold hover:bg-primaryColor-dark transition-colors duration-300">
              checkout
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};
