import { NavLink, useLocation } from "react-router-dom";
import { HeartIcon } from "../../../Icons/HeartIcon";
import { SearchIcon } from "../../../Icons/SearchIcon";
import { UserProfileIcon } from "../../../Icons/UserProfileIcon";

export const NavigationTab = () => {
  //
  //
  const location = useLocation();

  //
  return (
    <div className="fixed bottom-0 flex bg-white justify-center gap-10 pt-3 w-full border-t-2 tablet-above:hidden z-10">
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
      <div>
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
