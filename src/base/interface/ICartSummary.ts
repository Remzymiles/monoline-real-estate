import { ICartProperty } from "./ICartProperty";

export interface ICartSummary {
  cartProperties: ICartProperty[];
  handleCheckoutPropertyIds: () => void;
}
