import { create } from "zustand";
import { IWishlistStore } from "../interface/IWishlistStore";

export const useWishListStore = create<IWishlistStore>((set) => ({
  wishlistPropertyIds: [],

  updateWishlistPropertyIds: (newWishlistPropertyId) =>
    set((state) => ({
      wishlistPropertyIds: [
        ...state.wishlistPropertyIds,
        newWishlistPropertyId,
      ],
    })),

  removeWishlistPropertyId: (propertyId) =>
    set((state) => ({
      wishlistPropertyIds: state.wishlistPropertyIds.filter(
        (id) => id !== propertyId
      ),
    })),

  clearWishlistPropertyIds: () =>
    set(() => ({
      wishlistPropertyIds: [],
    })),
}));
