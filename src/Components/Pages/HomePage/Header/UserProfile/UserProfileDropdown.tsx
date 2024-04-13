import { BarsIcon } from "../../../../Icons/BarsIcon";
import { UserProfileIcon } from "../../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";
import { useHandleUserProfileDropdown } from "../../../../../base/hooks/useHandleDropdown";

export const UserProfileDropdown = (): JSX.Element => {
  const { isVisible, openDropDown, dropdownRef, setIsVisible } =
    useHandleUserProfileDropdown();

  return (
    <div
      ref={dropdownRef}
      onClick={() => {
        isVisible ? setIsVisible(false) : null;
      }}
    >
      <button
        onClick={openDropDown}
        className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-xl big-screen-mobile-below:rounded-full border hover:shadow-lg transition-shadow duration-300 hover:outline outline-1 outline-black"
      >
        <BarsIcon />
        <UserProfileIcon extraStyle="bg-gray-400" />
      </button>
      <DropdownContent extraStyle={isVisible ? "block" : "hidden"} />
    </div>
  );
};
