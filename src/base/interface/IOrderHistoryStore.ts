import { IProperty } from "../interface/IProperty";
export interface IOrderHistoryStore {
  orderHistoryProperties: IProperty[];
  updateOrderHistoryProperties: (newProperty: IProperty) => void;
  clearOrderHistoryProperties: () => void;
}
