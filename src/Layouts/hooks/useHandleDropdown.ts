import { useEffect, useRef, useState } from "react";
import { IUseHandleGeneralHeaderDropdown } from "../interface/IUseHandleMainLayoutDropdown";

export const useHandleGeneralHeaderDropdown =
  (): IUseHandleGeneralHeaderDropdown => {
    const [isGeneralHeaderDropdownVisible, setIsGeneralHeaderDropdownVisible] =
      useState(false);
    const generalHeaderDropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenGeneralHeaderDropdown = (): void => {
      setIsGeneralHeaderDropdownVisible(true);
    };

    const handleCloseGeneralHeaderDropdown = (): void => {
      setIsGeneralHeaderDropdownVisible(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | Event): void => {
        if (
          generalHeaderDropdownRef.current &&
          !generalHeaderDropdownRef.current.contains(event.target as Node)
        ) {
          handleCloseGeneralHeaderDropdown();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return {
      isGeneralHeaderDropdownVisible,
      handleOpenGeneralHeaderDropdown,
      handleCloseGeneralHeaderDropdown,
      generalHeaderDropdownRef,
      setIsGeneralHeaderDropdownVisible,
    };
  };
