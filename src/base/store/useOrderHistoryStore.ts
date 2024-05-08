import create from "zustand";
import { IOrderHistoryStore } from "../interface/IOrderHistoryStore";

export const useOrderHistoryStore = create<IOrderHistoryStore>((set) => ({
  orderHistoryPropertyIds: [],

  updateOrderHistoryPropertyIds: (newOrderHistoryPropertyId) =>
    set((state) => ({
      orderHistoryPropertyIds:
        typeof newOrderHistoryPropertyId === "number"
          ? [...state.orderHistoryPropertyIds, newOrderHistoryPropertyId]
          : newOrderHistoryPropertyId,
    })),
}));
