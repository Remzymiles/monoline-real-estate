import { create } from "zustand";
import { ISearchValueStore } from "../../Layouts/interface/ISearchValueStore";

export const useSearchValueStore = create<ISearchValueStore>((set) => ({
  searchValue: "",
  updateSearchValue: (newSearchValue) => set({ searchValue: newSearchValue }),
}));
