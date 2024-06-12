import { IProperty } from "../../../Layouts/interface/IProperty";

export interface IOrderHistoryStore {
  orderHistoryProperties: IProperty[];
  updateOrderHistoryProperties: (newProperty: IProperty) => void;
  clearOrderHistoryProperties: () => void;
}
