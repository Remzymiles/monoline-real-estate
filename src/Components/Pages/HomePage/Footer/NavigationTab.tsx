import { NavLink, useLocation } from "react-router-dom";
import { useCartPropertyIdsStore } from "../../../../base/store/useCartPropertyIdsStore";
import { useWishListStore } from "../../../../base/store/useWishListStore";
import { CartIcon } from "../../../Icons/CartIcon";
import { HeartIcon } from "../../../Icons/HeartIcon";
import { SearchIcon } from "../../../Icons/SearchIcon";
import { UserProfileIcon } from "../../../Icons/UserProfileIcon";

export const NavigationTab = () => {
  //
  const location = useLocation();
  //
  const { propertyIds } = useCartPropertyIdsStore((state) => ({
    propertyIds: state.propertyIds,
  }));
  //
  const { WishlistPropertyIds } = useWishListStore((state) => ({
    WishlistPropertyIds: state.wishlistPropertyIds,
  }));

  //
  return (
    <div className="fixed px-2 bottom-0 flex bg-white justify-between gap-x-2 pt-3 w-full border-t-2 tablet-above:hidden z-10">
      <div>
        <NavLink
          to={"/"}
          className={`text-center font-semibold text-sm ${
            location.pathname === "/" ? "text-primaryColor-light" : "text-black"
          }`}
        >
          <SearchIcon
            extraStyle={`${
              location.pathname === "/"
                ? "text-primaryColor-light"
                : "text-gray-400"
            }`}
          />{" "}
          Explore
        </NavLink>
      </div>
      {/*  */}
      <div className="">
        <NavLink
          to={"/cart-page"}
          className={`relative font-semibold text-sm ${
            location.pathname === "/cart-page"
              ? "text-primaryColor-light"
              : "text-black"
          }`}
        >
          <CartIcon
            extraStyle={` text-center ${
              location.pathname === "/cart-page"
                ? "fill-primaryColor-light"
                : "fill-gray-400"
            }`}
          />
          <p>Cart</p>
          {propertyIds.length > 0 && (
            <p className="absolute -top-2 -right-2 font-extrabold bg-primaryColor-light rounded-full px-[5px] text-xs text-white">
              {propertyIds.length}
            </p>
          )}
        </NavLink>
      </div>
      {/*  */}
      <div className="relative">
        <NavLink
          to={"/wishlist"}
          className={`text-center font-semibold text-sm ${
            location.pathname === "/wishlist"
              ? "text-primaryColor-light"
              : "text-black"
          }`}
        >
          <HeartIcon
            color={`${
              location.pathname === "/wishlist"
                ? "text-primaryColor-light"
                : "text-gray-400"
            }`}
          />{" "}
          Wishlists
        </NavLink>
        {WishlistPropertyIds.length > 0 && (
          <div
            className={`${
              location.pathname === "/wishlist" ? "hidden" : "block"
            }`}
          >
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primaryColor-light opacity-75 top-3 right-2"></span>
            <span className="h-2 w-2 bg-primaryColor-light rounded-full absolute top-3 right-2"></span>
          </div>
        )}
      </div>
      {/*  */}
      <div className="-translate-y-[2px]">
        <NavLink
          to={"/profile"}
          className={`flex flex-col items-center gap-0 ${
            location.pathname === "/profile"
              ? "text-primaryColor-light"
              : "text-black"
          }`}
        >
          <UserProfileIcon
            iconStyle="-translate-y-[1px]"
            extraStyle={`h-[27px] w-[27px] ${
              location.pathname === "/profile"
                ? "bg-primaryColor-light"
                : "bg-gray-400"
            }`}
          />
          <span className="text-sm font-semibold">Profile</span>
        </NavLink>
      </div>
    </div>
  );
};
