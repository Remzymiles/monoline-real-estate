import { useLocation } from "react-router-dom";
import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { useWishListStore } from "../../../../../base/store/useWishListStore";
import { BarsIcon } from "../../../../Icons/BarsIcon";
import { UserProfileIcon } from "../../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";

export const UserProfileDropdown = () => {
  //
  const currentLocation = useLocation();
  const {
    isUserProfileVisible,
    handleOpenUserProfileDropDown,
    userProfileDropdownRef,
    setIsUserProfileVisible,
  } = useHandleUserProfileDropdown();
  //
  const { WishlistPropertyIds } = useWishListStore((state) => ({
    WishlistPropertyIds: state.wishlistPropertyIds,
  }));
  //
  return (
    <div
      ref={userProfileDropdownRef}
      onClick={() => {
        isUserProfileVisible ? setIsUserProfileVisible(false) : null;
      }}
      className="relative"
    >
      <button
        onClick={handleOpenUserProfileDropDown}
        className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
      >
        <BarsIcon />
        <UserProfileIcon
          iconStyle="text-sm"
          extraStyle="bg-black/80 h-[30px] w-[30px] big-screen-mobile-below:hidden"
        />
      </button>
      <DropdownContent extraStyle={isUserProfileVisible ? "block" : "hidden"} />
      {WishlistPropertyIds.length > 0 && (
        <div
          className={`absolute top-0 right-0 ${
            currentLocation.pathname === "/wishlist" ? "hidden" : "block"
          }`}
        >
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primaryColor-light opacity-75 top-0 right-0 big-screen-mobile-below:right-[3px] big-screen-mobile-below:top-[2px]"></span>
          <span className="h-2 w-2 bg-primaryColor-light rounded-full absolute top-0 right-0 big-screen-mobile-below:right-[3px] big-screen-mobile-below:top-[2px]"></span>
        </div>
      )}
    </div>
  );
};
