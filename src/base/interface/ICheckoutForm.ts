import { IProperty } from "./IProperty";

export interface ICheckoutForm {
  checkoutProperties: IProperty[];
  handleOpenPaymentSuccessModal: () => void;
  setIsPaymentButtonClicked: (value: boolean) => void;
}
