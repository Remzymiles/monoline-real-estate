import { IProperty } from "./IProperty";

export interface IShowCheckoutPropertyPicturesModal {
    clickedCheckoutProperty: IProperty | undefined;
    isShowCheckoutPropertyPicturesClicked: boolean;
    handleCloseCheckoutPicturesModal: () => void;
    clickedCheckoutPropertyId?: number;
}
