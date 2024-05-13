import { create } from "zustand";
import { IOrderHistoryStore } from "../interface/IOrderHistoryStore";
import { IProperty } from "../interface/IProperty";

export const useOrderHistoryStore = create<IOrderHistoryStore>((set) => ({
  orderHistoryProperties: [],

  updateOrderHistoryProperties: (newProperty: IProperty) =>
    set((state) => ({
      orderHistoryProperties: [...state.orderHistoryProperties, newProperty],
    })),

  clearOrderHistoryProperties: () =>
    set(() => ({
      orderHistoryProperties: [],
    })),
}));