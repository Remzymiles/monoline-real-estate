import { useState, useRef, useEffect } from "react";
import { IUseHandleUserProfileDropdown } from "../interface/IUseHandleUserProfileDropdown";


export const useHandleUserProfileDropdown = ():IUseHandleUserProfileDropdown => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropDown = (): void => {
    setIsVisible(true);
  };

  const closeDropDown = (): void => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropDown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isVisible, openDropDown, closeDropDown, dropdownRef, setIsVisible };
};
