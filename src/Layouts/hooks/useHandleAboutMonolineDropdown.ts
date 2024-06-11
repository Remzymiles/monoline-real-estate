import { useState } from "react";

export const UseHandleAboutMonolineDropdown = () => {
  //
  const [isAboutMonolineVisible, setIsAboutMonolineVisible] = useState(false);

  const openAboutMonolineDropDown = () => {
    !isAboutMonolineVisible
      ? setIsAboutMonolineVisible(true)
      : setIsAboutMonolineVisible(false);
  };
  return { openAboutMonolineDropDown, isAboutMonolineVisible };
};
