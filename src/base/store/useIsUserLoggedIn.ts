import { create } from "zustand";
import { IIsUserLoggedIn } from "../../Layouts/interface/IIsUserLoggedIn";

export const useIsUserLoggedIn = create<IIsUserLoggedIn>((set) => ({
  isUserLoggedIn: false,

  setIsUserLoggedIn: (value) =>
    set(() => ({
      isUserLoggedIn: value,
    })),
}));
