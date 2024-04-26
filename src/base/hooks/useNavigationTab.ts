import { useState } from "react";

export const useNavigationTab = () => {
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const handleSetExploreActive = () => {
    setIsExploreActive(true);
    setIsWishlistActive(false);
    setIsProfileActive(false);
  };
  const handleSetWishlistActive = () => {
    setIsExploreActive(false);
    setIsWishlistActive(true);
    setIsProfileActive(false);
  };
  const handleSetProfileActive = () => {
    setIsExploreActive(false);
    setIsWishlistActive(false);
    setIsProfileActive(true);
  };

  return {
    isExploreActive,
    isWishlistActive,
    isProfileActive,
    handleSetExploreActive,
    handleSetWishlistActive,
    handleSetProfileActive,
  };
};
