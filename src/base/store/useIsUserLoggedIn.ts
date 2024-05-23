import { create } from "zustand";
import { IIsUserLoggedIn } from "../interface/IIsUserLoggedIn";

export const useIsUserLoggedIn = create<IIsUserLoggedIn>((set) => ({
    isUserLoggedIn: false,
  
    setIsUserLoggedIn: (value) =>
    set(() => ({
        isUserLoggedIn: value,
    })),
}));
