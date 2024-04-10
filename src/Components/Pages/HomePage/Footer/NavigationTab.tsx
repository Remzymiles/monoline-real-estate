import { NavLink } from "react-router-dom";
import { HeartIcon } from "../../../Icons/HeartIcon";
import { SearchIcon } from "../../../Icons/SearchIcon";
import { UserProfileIcon } from "../../../Icons/UserProfileIcon";
import { useState } from "react";

export const NavigationTab = () => {
  //
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  //
  return (
    <div className="fixed bottom-0 flex bg-white justify-center gap-10 pt-2 w-full border-t-2 tablet-above:hidden z-50">
      <NavLink
        to={"/"}
        className="text-center font-semibold text-sm "
        style={({ isActive }) => {
          {
            isActive ? setIsExploreActive(true) : setIsExploreActive(false);
          }
          return {
            color: isActive ? "#89935ee8" : "black",
          };
        }}
      >
        <SearchIcon
          textColor={`${
            isExploreActive ? "text-primaryColor-light" : "text-gray-400"
          }`}
        />{" "}
        Explore
      </NavLink>
      {/*  */}
      <NavLink
        to={"/wishlist"}
        className="text-center font-semibold text-sm"
        style={({ isActive }) => {
          {
            isActive ? setIsWishlistActive(true) : setIsWishlistActive(false);
          }
          return {
            color: isActive ? "#89935ee8" : "black",
          };
        }}
      >
        <HeartIcon
          color={`${
            isWishlistActive ? "text-primaryColor-light" : "text-gray-400"
          }`}
        />{" "}
        Wishlists
      </NavLink>
      {/*  */}
      <NavLink
        to={"/profile"}
        style={({ isActive }) => {
          {
            isActive ? setIsProfileActive(true) : setIsProfileActive(false);
          }
          return {
            color: isActive ? "#89935ee8" : "black",
          };
        }}
        className="flex justify-center flex-col items-center text-center font-semibold text-sm "
      >
        <UserProfileIcon
          extraStyle={`pt-[2px] ${
            isProfileActive ? "bg-primaryColor-light" : "bg-gray-400"
          }`}
        />
        Profile
      </NavLink>
    </div>
  );
};
