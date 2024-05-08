import { useEffect } from "react";
import { Link } from "react-router-dom";
import Properties from "../../../base/dummyData/properties.json";
import { useCartPropertyIdsStore } from "../../../base/store/useCartPropertyIdsStore";
import { useWishListStore } from "../../../base/store/useWishListStore";
import { TrashCanIcon } from "../../Icons/TrashCanIcon";
import { useCheckoutStore } from "../../../base/store/useCheckoutStore";

export const CartPropertyCard = () => {
  const { propertyIds, removePropertyId } = useCartPropertyIdsStore(
    (state) => ({
      propertyIds: state.propertyIds,
      removePropertyId: state.removePropertyId,
    })
  );

  const cartProperties = Properties.filter((property) =>
    propertyIds.includes(property.property_id)
  );

  const totalCartPrice = cartProperties.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  // 
  const {updateCheckoutIds} = useCheckoutStore((state)=>({
    checkoutId: state.checkoutIds,
    updateCheckoutIds: state.updateCheckoutIds
  }))
  //
  const {
    wishlistPropertyIds,
    updateWishlistPropertyId,
    removeWishlistPropertyId,
  } = useWishListStore((state) => ({
    wishlistPropertyIds: state.wishlistPropertyIds,
    updateWishlistPropertyId: state.updateWishlistPropertyIds,
    removeWishlistPropertyId: state.removeWishlistPropertyId,
  }));

  const handleAddToWishlist = (propertyId: number) => {
    !wishlistPropertyIds.includes(propertyId)
      ? updateWishlistPropertyId(propertyId)
      : removeWishlistPropertyId(propertyId);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [propertyIds]);

  //
  return (
    <>
      <div className="flex flex-col big-screen-laptop:flex-row gap-14">
        <div className="big-screen-laptop:w-[60%]">
          {cartProperties.length <= 0 && (
            <p className="text-xl font-extrabold flex justify-center items-center">
              Your cart is empty.
            </p>
          )}
          {cartProperties.map((cartProperty) => {
            return (
              <div key={cartProperty.property_id}>
                <div className="grid grid-cols-4 big-screen-laptop:justify-around gap-x-5 big-screen-mobile-below:flex big-screen-mobile-below:flex-col my-3">
                  <Link
                    to={`/property-details/address=${cartProperty.location.address}&city=${cartProperty.location.city}&state=${cartProperty.location.state}&country=${cartProperty.location.country}&?id=${cartProperty.property_id}`}
                    className="w-[250px] col-span-2 h-[200px] flex gap-x-4 big-screen-mobile-below:w-[100%] big-screen-mobile-below:h-[250px] big-screen-mobile-below:flex-col big-screen-mobile-below:mb-2"
                  >
                    <img
                      src={cartProperty.photos[0]}
                      alt="img"
                      className="w-[100%] h-[100%] object-cover rounded-md"
                    />
                  </Link>
                  <div className="py-2">
                    <p className="font-semibold capitalize mb-2 break-words text-md">
                      {cartProperty.location.address}
                    </p>
                    <p className="font-bold capitalize text-lg">
                      ${cartProperty.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between items-end h-[200px] big-screen-mobile-below:w-full py-2 big-screen-mobile-below:h-auto">
                    <div
                      className="w-fit big-screen-mobile-below:flex big-screen-mobile-below:w-full bg-primaryColor-light big-screen-mobile-below:py-2 big-screen-mobile-below:justify-center big-screen-mobile-below:gap-x-3 big-screen-mobile-below:items-center big-screen-mobile-below:rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold rounded-full px-[7px] hover:bg-primaryColor-dark transition-colors duration-300"
                      onClick={() => {
                        removePropertyId(cartProperty.property_id);
                      }}
                    >
                      <TrashCanIcon
                        clicked={() => {
                          removePropertyId(cartProperty.property_id);
                        }}
                        extraStyle="text-white"
                      />{" "}
                      <span className="hidden big-screen-mobile-below:block">
                        remove property
                      </span>
                    </div>
                    <button
                      className="w-full bg-primaryColor-light big-screen-mobile-below:py-2 py-1 px-2 hover:bg-primaryColor-dark transition-colors duration-300 rounded-lg big-screen-mobile-below:mb-2 text-white capitalize font-bold"
                      onClick={() => {
                        handleAddToWishlist(cartProperty.property_id);
                      }}
                    >
                      {wishlistPropertyIds.includes(
                        Number(cartProperty.property_id)
                      )
                        ? "saved"
                        : "save for later"}
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="bg-primaryColor-lightCream px-3 py-3 big-screen-laptop:w-[30%] h-fit shadow-xl border rounded-lg">
          <h1 className="capitalize font-bold text-xl mb-2 text-center">
            summary
          </h1>
          <hr />
          <div>
            {cartProperties.map((cartProperty) => {
              return (
                <div
                  key={cartProperty.property_id}
                  className="flex justify-between gap-x-4 my-4"
                >
                  <p className="truncate capitalize">
                    {cartProperty.location.address}
                  </p>
                  :
                  <p className="font-extrabold">
                    ${cartProperty.price.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
          <hr />
          <div>
          <div className="flex justify-between gap-x-4 my-4">
              <p className="capitalize font-bold">subTotal</p>:
              <p className="font-extrabold break-all">
                ${totalCartPrice.toLocaleString()}
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between gap-x-4 my-4">
              <p className="capitalize font-bold">tax</p>:
              <p className="font-extrabold break-all">
                ${(totalCartPrice / 50).toLocaleString()}
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between gap-x-4 my-3">
              <p className="capitalize font-bold">total price</p>:
              <p className="font-extrabold break-all">
                ${(totalCartPrice + (totalCartPrice / 50)).toLocaleString()}
              </p>
            </div>
            <hr />
            {/*  */}
            <Link to={"/checkout"} onClick={()=>{
              updateCheckoutIds(propertyIds)
            }}>
              <button className="mt-3 bg-primaryColor-light w-full py-2 rounded-md capitalize text-white text-lg font-extrabold hover:bg-primaryColor-dark transition-colors duration-300">
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
