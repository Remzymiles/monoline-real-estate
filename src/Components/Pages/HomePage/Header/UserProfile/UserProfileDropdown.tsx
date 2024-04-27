import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";
import { BarsIcon } from "../../../../Icons/BarsIcon";
import { UserProfileIcon } from "../../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";

export const UserProfileDropdown = (): JSX.Element => {
  const {
    isUserProfileVisible,
    handleOpenUserProfileDropDown,
    userProfileDropdownRef,
    setIsUserProfileVisible,
  } = useHandleUserProfileDropdown();

  return (
    <div
      ref={userProfileDropdownRef}
      onClick={() => {
        isUserProfileVisible ? setIsUserProfileVisible(false) : null;
      }}
    >
      <button
        onClick={handleOpenUserProfileDropDown}
        className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
      >
        <BarsIcon />
        <UserProfileIcon
          iconStyle=""
          extraStyle="bg-gray-400 h-[30px] w-[30px]"
        />
      </button>
      <DropdownContent extraStyle={isUserProfileVisible ? "block" : "hidden"} />
    </div>
  );
};
