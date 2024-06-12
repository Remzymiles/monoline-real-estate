import { Dispatch, SetStateAction } from "react";

export interface IUseHandleMainLayoutDropdown {
  isUserProfileVisible: boolean;
  setIsUserProfileVisible: Dispatch<SetStateAction<boolean>>;
  handleOpenUserProfileDropDown: () => void;
  handleCloseUserProfileDropDown: () => void;
  userProfileDropdownRef: React.RefObject<HTMLDivElement>;
}
