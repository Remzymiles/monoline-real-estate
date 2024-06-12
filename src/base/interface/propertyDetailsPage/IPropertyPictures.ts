import { IProperty } from "../../../Layouts/interface/IProperty";

export interface IPropertyPictures {
  handleOpenAllPicturesModal: () => void;
  selectedProperty: IProperty | undefined;
  propertyId: string;
}
