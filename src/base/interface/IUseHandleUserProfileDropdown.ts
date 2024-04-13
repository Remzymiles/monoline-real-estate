import { Dispatch, SetStateAction } from "react";

export interface IUseHandleUserProfileDropdown {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  openDropDown: () => void;
  closeDropDown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}
