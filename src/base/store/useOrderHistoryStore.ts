import { create } from "zustand";
import { IOrderHistoryStore } from "../interface/IOrderHistoryStore";

export const useOrderHistoryStore = create<IOrderHistoryStore>((set) => ({
  orderHistoryProperties: [],

  updateOrderHistoryProperties: (newProperty) =>
    set((state) => ({
      orderHistoryProperties: [...state.orderHistoryProperties, newProperty],
    })),

  clearOrderHistoryProperties: () =>
    set(() => ({
      orderHistoryProperties: [],
    })),
}));
