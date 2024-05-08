export interface IOrderHistoryStore {
  orderHistoryPropertyIds: number[];
  updateOrderHistoryPropertyIds: (
    newOrderHistoryPropertyId: number | number[]
  ) => void;
}
