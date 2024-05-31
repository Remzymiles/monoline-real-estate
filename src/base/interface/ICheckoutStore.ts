export interface ICheckoutStore {
  checkoutIds: string[];
  isPropertyFromCart: boolean;
  setIsPropertyFromCart: (value: boolean) => void;
  updateCheckoutIds: (newCheckoutIds: string | string[]) => void;
}
