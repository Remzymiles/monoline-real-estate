import { create } from "zustand";
import { ICheckoutStore } from "../../interface/checkoutPage/ICheckoutStore";

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
        typeof newCheckoutIds === "string" ? [newCheckoutIds] : newCheckoutIds,
    })),
}));
