import { NavLink, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useCartLengthStore } from "../../../../base/store/useCartLengthStore";
import { useCartPropertyIdsStore } from "../../../../base/store/useCartPropertyIdsStore";
import { useIsUserLoggedIn } from "../../../../base/store/useIsUserLoggedIn";
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
  const { cartLength } = useCartLengthStore((state) => ({
    cartLength: state.cartLength,
  }));
  //
  const { WishlistPropertyIds } = useWishListStore((state) => ({
    WishlistPropertyIds: state.wishlistPropertyIds,
  }));
  //
  const { isUserLoggedIn } = useIsUserLoggedIn((state) => ({
    isUserLoggedIn: state.isUserLoggedIn,
  }));
  const handleCartIconClick = () => {
    !isUserLoggedIn && toast.error("Log in or Sign up to view Cart");
  };
  const handleWishlistIconClick = () => {
    !isUserLoggedIn && toast.error("Log in or Sign up to view Wishlist");
  };

  //
  return (
    <div className="fixed px-2 bottom-0 flex bg-white dark:bg-secondaryColor-light  justify-between gap-x-2 pt-3 w-full border-t-2 dark:border-gray-400 tablet-above:hidden z-10">
      <div>
        <NavLink
          to={"/"}
          className={`text-center font-semibold text-sm ${
            location.pathname === "/"
              ? "text-primaryColor-light dark:text-primaryColorDarkMode"
              : "text-black dark:text-gray-400"
          }`}
        >
          <SearchIcon
            extraStyle={`${
              location.pathname === "/"
                ? "text-primaryColor-light dark:text-primaryColorDarkMode"
                : "text-gray-400"
            }`}
          />{" "}
          Explore
        </NavLink>
      </div>
      {/*  */}
      <div className="">
        <NavLink
          to={`${isUserLoggedIn ? "/cart-page" : `${location.search}`}`}
          className={`relative font-semibold text-sm ${
            location.pathname === "/cart-page"
              ? "text-primaryColor-light dark:text-primaryColorDarkMode"
              : "text-black dark:text-gray-400"
          }`}
          onClick={handleCartIconClick}
        >
          <CartIcon
            extraStyle={` text-center ${
              location.pathname === "/cart-page"
                ? "fill-primaryColor-light dark:fill-primaryColorDarkMode"
                : "fill-gray-400"
            }`}
          />
          <p>Cart</p>
          {cartLength > 0 && (
            <p className="absolute -top-2 -right-2 font-extrabold bg-primaryColor-light dark:bg-primaryColorDarkMode dark:text-gray-200 rounded-full px-[5px] text-xs text-white">
              {cartLength}
            </p>
          )}
        </NavLink>
      </div>
      {/*  */}
      <div className="relative">
        <NavLink
          to={`${isUserLoggedIn ? "/wishlist" : `${location.search}`}`}
          className={`text-center font-semibold text-sm ${
            location.pathname === "/wishlist"
              ? "text-primaryColor-light dark:text-primaryColorDarkMode"
              : "text-black dark:text-gray-400"
          }`}
          onClick={handleWishlistIconClick}
        >
          <HeartIcon
            color={`${
              location.pathname === "/wishlist"
                ? "text-primaryColor-light dark:text-primaryColorDarkMode"
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
          to={`${isUserLoggedIn ? "/profile" : "/auth/login"}`}
          className={`flex flex-col items-center gap-0 ${
            location.pathname === "/profile"
              ? "text-primaryColor-light dark:text-primaryColorDarkMode"
              : "text-black dark:text-gray-400"
          }`}
        >
          <UserProfileIcon
            iconStyle="-translate-y-[1px]"
            extraStyle={`h-[27px] w-[27px] ${
              location.pathname === "/profile"
                ? "bg-primaryColor-light dark:bg-primaryColorDarkMode"
                : "bg-gray-400"
            }`}
          />
          <span className="text-sm font-semibold">Profile</span>
        </NavLink>
      </div>
    </div>
  );
};
