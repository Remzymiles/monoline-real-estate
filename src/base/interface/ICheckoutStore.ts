export interface ICheckoutStore {
  checkoutIds: number[];
  updateCheckoutIds: (newCheckoutIds: number | number[]) => void;
}
