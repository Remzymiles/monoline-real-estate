import { ICartProperty } from "./ICartProperty";

export interface ICartSummary {
  cartProperties: ICartProperty[];
  handleCheckoutPropertyIds: (value: string | string[]) => void;
}
