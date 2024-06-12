import { IProperty } from "../../../Layouts/interface/IProperty";

export interface IShowCheckoutPropertyPicturesModal {
  clickedCheckoutProperty: IProperty | undefined;
  isShowCheckoutPropertyPicturesClicked: boolean;
  handleCloseCheckoutPicturesModal: () => void;
  clickedCheckoutPropertyId?: string;
}
