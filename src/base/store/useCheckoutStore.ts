import { create } from "zustand";
import { ICheckoutStore } from "../interface/ICheckoutStore";

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  checkoutIds: [],

  isPropertyFromCart: false,
  
  setIsPropertyFromCart: (value) =>
    set(() => ({
      isPropertyFromCart: value,
    })),

  updateCheckoutIds: (newCheckoutIds) =>
    set(() => ({
      checkoutIds:
        typeof newCheckoutIds === "number" ? [newCheckoutIds] : newCheckoutIds,
    })),
}));
