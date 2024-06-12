import { create } from "zustand";
import { IIsPropertyInWishlist } from "../../interface/wishlistPage/IIsPropertyInWishlist";

export const useHandleIsPropertyInWishlist = create<IIsPropertyInWishlist>(
  (set) => ({
    propertiesInWishlist: {},

    setIsPropertyInWishlist: (propertyId, isInWishlist) =>
      set((state) => ({
        propertiesInWishlist: {
          ...state.propertiesInWishlist,
          [propertyId]: isInWishlist,
        },
      })),
  })
);
