import { IProperty } from "./IProperty";

export interface ICartSummary {
  cartProperties: IProperty[];
  handleCheckoutPropertyIds: () => void;
}
