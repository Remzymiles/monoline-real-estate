import { IProperty } from "./IProperty"

export interface ICheckoutPropertyInfo {
  checkoutProperties: IProperty[]
  handleOpenCheckoutPicturesModal: (checkoutProperty:IProperty)=> void
}
