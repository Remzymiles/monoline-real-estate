import { IProperty } from "../../../Layouts/interface/IProperty";

export interface ICheckoutForm {
  checkoutProperties: IProperty[];
  handleOpenPaymentSuccessModal: () => void;
  setIsPaymentButtonClicked: (value: boolean) => void;
}
