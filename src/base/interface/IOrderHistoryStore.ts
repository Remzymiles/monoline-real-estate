import { IProperty } from "./IProperty";

export interface IOrderHistoryStore {
  orderHistoryProperties: IProperty[];
  updateOrderHistoryProperties: (newProperty: IProperty) => void;
  clearOrderHistoryProperties: () => void;
}
