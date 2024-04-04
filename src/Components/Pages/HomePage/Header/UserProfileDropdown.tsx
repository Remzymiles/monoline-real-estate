import { BarsIcon } from "../../../Icons/BarsIcon";
import { UserProfileIcon } from "../../../Icons/UserProfileIcon";
import { DropdownContent } from "./DropdownContent";
import { useHandleDropdown } from "../../../../base/hooks/useHandleDropdown";

export const UserProfileDropdown = () => {
  //
  const { isVisible, openDropDown } = useHandleDropdown();

  return (
    <div>
      <button
        onClick={openDropDown}
        className="flex gap-3 items-center bg-white px-3 py-1.5 rounded-full border hover:shadow-lg transition-shadow duration-300"
      >
        <BarsIcon />
        <UserProfileIcon />
      </button>
      {isVisible && <DropdownContent />}
    </div>
  );
};
