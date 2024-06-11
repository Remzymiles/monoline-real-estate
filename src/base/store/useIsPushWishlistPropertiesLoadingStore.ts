import { create } from "zustand";
import { IIsPushWishlistPropertiesLoadingStore } from "../interface/IIsPushWishlistPropertiesLoadingStore";

export const useIsPushWishlistPropertiesLoadingStore =
  create<IIsPushWishlistPropertiesLoadingStore>((set) => ({
    IsPushWishlistPropertiesLoading: {},
    setIsPushWishlistPropertiesLoading: (propertyId, isLoading) =>
      set((state) => ({
        IsPushWishlistPropertiesLoading: {
          ...state.IsPushWishlistPropertiesLoading,
          [propertyId]: isLoading,
        },
      })),
  }));
