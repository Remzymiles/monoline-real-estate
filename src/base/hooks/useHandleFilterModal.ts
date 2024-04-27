import { useEffect, useRef, useState } from "react";

export const useHandleFilterModal = () => {
    const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
    const filterDropdownRef = useRef<HTMLDivElement>(null);

    const handleOpenFilterModal = (): void => {
      setIsFilterVisible(true);
      window.document.body.style.overflow = "hidden";
    };

    const handleCloseFilterModal = (): void => {
      setIsFilterVisible(false);
      window.document.body.style.overflow = "";
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | Event): void => {
        if (
          filterDropdownRef.current &&
          !filterDropdownRef.current.contains(event.target as Node)
        ) {
          handleCloseFilterModal();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return {
      isFilterVisible,
      handleOpenFilterModal,
      handleCloseFilterModal,
      filterDropdownRef,
      setIsFilterVisible,
    };
};
