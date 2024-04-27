import { create } from "zustand";
import { ICartPropertyIdsStore } from "../interface/ICartPropertyIdsStore";

export const useCartPropertyIdsStore = create<ICartPropertyIdsStore>((set) => ({
  propertyIds: [],

  updatePropertyIds: (newPropertyId) =>
    set((state) => ({
      propertyIds: [...state.propertyIds, newPropertyId],
    })),

  clearPropertyIds: () =>
    set(() => ({
      propertyIds: [],
    })),
}));
