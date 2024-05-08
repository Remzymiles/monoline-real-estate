import { create } from "zustand";
import { ICheckoutStore } from "../interface/ICheckoutStore";

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
  checkoutIds: [],
  updateCheckoutIds: (newCheckoutIds) =>
    set(() => ({
      checkoutIds:
        typeof newCheckoutIds === "number" ? [newCheckoutIds] : newCheckoutIds,
    })),
}));
