import { useEffect, useRef, useState } from "react";
import { IUseHandleMainLayoutDropdown } from "../interface/IUseHandleMainLayoutDropdown";

export const useHandleUserProfileDropdown =
  (): IUseHandleMainLayoutDropdown => {
    const [isUserProfileVisible, setIsUserProfileVisible] = useState(false);
    const userProfileDropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenUserProfileDropDown = (): void => {
      setIsUserProfileVisible(true);
    };

    const handleCloseUserProfileDropDown = (): void => {
      setIsUserProfileVisible(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | Event): void => {
        if (
          userProfileDropdownRef.current &&
          !userProfileDropdownRef.current.contains(event.target as Node)
        ) {
          handleCloseUserProfileDropDown();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return {
      isUserProfileVisible,
      handleOpenUserProfileDropDown,
      handleCloseUserProfileDropDown,
      userProfileDropdownRef,
      setIsUserProfileVisible,
    };
  };
