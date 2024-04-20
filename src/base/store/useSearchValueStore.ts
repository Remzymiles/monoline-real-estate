import { create } from "zustand";
import { ISearchValueStore } from "../interface/ISearchValueStore";

export const useSearchValueStore = create<ISearchValueStore>((set) => ({
  searchValue: "",
  updateSearchValue: (newSearchValue) => set({ searchValue: newSearchValue }),
}));
