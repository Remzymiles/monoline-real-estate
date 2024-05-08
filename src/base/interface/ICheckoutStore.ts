export interface ICheckoutStore {
  checkoutIds: number[];
  isPropertyFromCart: boolean;
  setIsPropertyFromCart: (value: boolean) => void;
  updateCheckoutIds: (newCheckoutIds: number | number[]) => void;
}
