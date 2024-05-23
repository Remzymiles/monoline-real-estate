import { useState } from "react";

export const UseHandleJoinMonolineDropdown = () => {
  //
  const [isJoinMonolineVisible, setIsJoinMonolineVisible] = useState(false);

  const openJoinMonolineDropDown = () => {
    !isJoinMonolineVisible
      ? setIsJoinMonolineVisible(true)
      : setIsJoinMonolineVisible(false);
  };
  return { openJoinMonolineDropDown, isJoinMonolineVisible };
};
