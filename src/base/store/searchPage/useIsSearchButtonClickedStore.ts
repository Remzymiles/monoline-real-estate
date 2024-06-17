import { create } from "zustand";
import { IIsSearchButtonClicked } from "../../interface/searchPage/IIsSearchButtonClicked";

export const useIsSearchButtonClickedStore = create<IIsSearchButtonClicked>(
  (set) => ({
    isSearchButtonClicked: false,

    setIsSearchButtonClicked: (value) => set({ isSearchButtonClicked: value }),
  })
);
