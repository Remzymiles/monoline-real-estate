import { IProperty } from "../../../Layouts/interface/IProperty";

export interface IShowAllPicturesModal {
  selectedProperty: IProperty | undefined;
  isShowPicturesClicked: boolean;
  handleCloseAllPicturesModal: () => void;
  propertyId: string;
}
