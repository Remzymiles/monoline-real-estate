import { create } from "zustand";
import { ICartLengthStore } from "../interface/ICartLengthStore";

export const useCartLengthStore = create<ICartLengthStore>((set) => ({
  cartLength: 0,

  updateCartLength: (newCartLength) =>
    set(() => ({
      cartLength: newCartLength,
    })),
}));
