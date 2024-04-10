import { useState } from "react";

export const UseHandleResourceDropDown = ()=>{
    // 
    const [isResourceVisible, setIsResourceVisible] = useState(false);

  const openResourceDropDown = () => {
    !isResourceVisible ? setIsResourceVisible(true) : setIsResourceVisible(false);
  }
    return{openResourceDropDown, isResourceVisible}
}