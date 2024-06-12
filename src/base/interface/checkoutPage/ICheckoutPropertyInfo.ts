import { IProperty } from "../../../Layouts/interface/IProperty";

export interface ICheckoutPropertyInfo {
  checkoutProperties: IProperty[];
  handleOpenCheckoutPicturesModal: (checkoutProperty: IProperty) => void;
}
