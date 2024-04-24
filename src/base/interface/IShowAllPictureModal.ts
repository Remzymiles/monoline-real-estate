import { IProperty } from "./IProperty";

export interface IShowAllPicturesModal {
  selectedProperty: IProperty | undefined;
  isShowPicturesClicked: boolean;
  handleCloseAllPicturesModal: () => void;
}
