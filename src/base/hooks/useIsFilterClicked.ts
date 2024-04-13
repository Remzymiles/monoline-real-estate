import { useState } from "react";

export const useIsFilterClicked = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  return {isFilterClicked, setIsFilterClicked};
};
