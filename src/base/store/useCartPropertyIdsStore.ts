import { create } from "zustand";
import { ICartPropertyIdsStore } from "../interface/ICartPropertyIdsStore";

export const useCartPropertyIdsStore = create<ICartPropertyIdsStore>((set) => ({
  propertyIds: [],

  updatePropertyIds: (newPropertyId) =>
    set((state) => ({
      propertyIds: [...state.propertyIds, newPropertyId],
    })),

  removePropertyId: (propertyId) =>
    set((state) => ({
      propertyIds: state.propertyIds.filter(id => id !== propertyId),
    })),

  clearPropertyIds: () =>
    set(() => ({
      propertyIds: [],
    })),
}));
