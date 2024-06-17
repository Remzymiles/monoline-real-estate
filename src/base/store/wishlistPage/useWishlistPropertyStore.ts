import { create } from "zustand";
import { IUseWishlistPropertyStore } from "../../interface/wishlistPage/IUseWishlistPropertyStore";

export const useWishlistPropertyStore = create<IUseWishlistPropertyStore>(
  (set) => ({
    wishlistProperty: [],

    updateWishlistProperty: (properties) =>
      set(() => ({
        wishlistProperty: properties,
      })),
  })
);
