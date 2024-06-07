import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { useProfilePhotoStore } from "../../../../../base/store/useProfilePhotoStore";
import { BarsIcon } from "../../../../Icons/BarsIcon";
import { ToggleDarkModeIcon } from "../../../../Icons/ToggleDarkModeIcon";
import { UserProfileIcon } from "../../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";

export const UserProfileDropdown = () => {
  //
  const {
    isUserProfileVisible,
    handleOpenUserProfileDropDown,
    userProfileDropdownRef,
    setIsUserProfileVisible,
  } = useHandleUserProfileDropdown();
  //
  //
  const { profilePhotoUrl } = useProfilePhotoStore((state) => ({
    profilePhotoUrl: state.profilePhotoUrl,
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
      <div className="flex gap-x-1 items-center bg-white px-3 py-1.5 big-screen-mobile-below:py-1 rounded-xl big-screen-mobile-below:rounded-full border">
        <button
          className="flex gap-x-2 items-center border-r-2 pr-[5px]"
          onClick={handleOpenUserProfileDropDown}
        >
          <BarsIcon />

          {profilePhotoUrl ? (
            <div className="h-[32px] w-[32px]">
              <img
                src={profilePhotoUrl}
                alt="image"
                className="h-[100%] w-[100%] rounded-full object-cover border"
              />
            </div>
          ) : (
            <UserProfileIcon
              iconStyle="text-xs"
              extraStyle="bg-black/80 h-[30px] w-[30px] "
            />
          )}
        </button>
        <ToggleDarkModeIcon />
      </div>
      <DropdownContent extraStyle={isUserProfileVisible ? "block" : "hidden"} />
    </div>
  );
};
