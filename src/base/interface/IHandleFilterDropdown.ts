import { Dispatch, SetStateAction } from "react";

export interface IHandleFilterDropdown {
  isFilterVisible: boolean;
  setIsFilterVisible: Dispatch<SetStateAction<boolean>>;
  openFilterDropDown: () => void;
  closeFilterDropDown: () => void;
  filterDropdownRef: React.RefObject<HTMLDivElement>;
}
