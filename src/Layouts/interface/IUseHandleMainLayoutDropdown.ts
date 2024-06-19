import { Dispatch, SetStateAction } from "react";

export interface IUseHandleGeneralHeaderDropdown {
  isGeneralHeaderDropdownVisible: boolean;
  setIsGeneralHeaderDropdownVisible: Dispatch<SetStateAction<boolean>>;
  handleOpenGeneralHeaderDropdown: () => void;
  handleCloseGeneralHeaderDropdown: () => void;
  generalHeaderDropdownRef: React.RefObject<HTMLDivElement>;
}
