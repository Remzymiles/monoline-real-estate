import { Link, useLocation } from "react-router-dom";
import { useWishListStore } from "../../../../../base/store/useWishListStore";

export const DropdownContent = ({ extraStyle }: { extraStyle: string }) => {
  const { WishlistPropertyIds } = useWishListStore((state) => ({
    WishlistPropertyIds: state.wishlistPropertyIds,
  }));
  //
  const currentLocation = useLocation();
  //
  return (
    <div
      className={`border rounded-lg absolute z-50 right-0  top-[52px] w-[160px] bg-white flex flex-col ${extraStyle}`}
    >
      <Link
        to={"/auth/sign-up"}
        className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        sign up
      </Link>
      <hr />
      <Link
        to={"/auth/login"}
        className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        login
      </Link>
      <hr />
      <Link
        to={"/wishlist"}
        className="relative capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        wishlist
        {WishlistPropertyIds.length > 0 && (
          <div
            className={`${
              currentLocation.pathname === "/wishlist" ? "hidden" : "block"
            }`}
          >
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primaryColor-light opacity-75 top-3 right-3"></span>
            <span className="h-2 w-2 bg-primaryColor-light rounded-full absolute top-3 right-3"></span>
          </div>
        )}
      </Link>
      <hr />
      <Link
        to={"/profile"}
        className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        profile
      </Link>{" "}
      <hr />
      <Link
        to={"/order-history"}
        className="capitalize font-semibold pl-4 text-md text-secondaryColor-dark py-1.5 hover:bg-slate-100 transition-colors duration-300 px-2"
      >
        order history
      </Link>
    </div>
  );
};
