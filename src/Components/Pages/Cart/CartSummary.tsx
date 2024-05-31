import { Link } from "react-router-dom";
import { ICartSummary } from "../../../base/interface/ICartSummary";

export const CartSummary = ({
  cartProperties,
  handleCheckoutPropertyIds,
}: ICartSummary) => {
  //
  const totalCartPrice = cartProperties.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  //
  return (
    <div className="px-3 bg-primaryColor-lightCream dark:bg-secondaryColor-dark/10 py-3 big-screen-laptop:w-[30%] h-fit shadow-xl border dark:border-gray-400/80 rounded-lg sticky top-0">
      <h1 className="capitalize font-bold text-xl mb-2 text-center">summary</h1>
      <hr />
      <div>
        {cartProperties.map((cartProperty) => {
          return (
            <div
              key={cartProperty.property_id}
              className="flex justify-between gap-x-4 my-4"
            >
              <p className="truncate capitalize">
                {cartProperty.propertyLocation.address}
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
            ${(totalCartPrice + totalCartPrice / 50).toLocaleString()}
          </p>
        </div>
        <hr />
        {/*  */}
        <Link
          to={`${cartProperties.length > 0 ? "/checkout" : "/cart-page"}`}
          onClick={handleCheckoutPropertyIds}
        >
          <button className="mt-3 bg-primaryColor-light dark:bg-primaryColorDarkMode/60 dark:hover:bg-primaryColorDarkMode/90 dark:text-gary-200 w-full py-2 rounded-md capitalize text-white text-lg font-extrabold hover:bg-primaryColor-dark transition-colors duration-300">
            checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
