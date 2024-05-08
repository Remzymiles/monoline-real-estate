import { create } from "zustand";
import { ICartPropertyIdsStore } from "../interface/ICartPropertyIdsStore";

export const useCartPropertyIdsStore = create<ICartPropertyIdsStore>((set) => ({
  propertyIds: [],

  updateCartPropertyIds: (newPropertyId) =>
    set((state) => ({
      propertyIds: [...state.propertyIds, newPropertyId],
    })),

  removePropertyId: (propertyId) =>
    set((state) => ({
      propertyIds: state.propertyIds.filter((id) => id !== propertyId),
    })),

  clearCartPropertyIds: () =>
    set(() => ({
      propertyIds: [],
    })),
}));
