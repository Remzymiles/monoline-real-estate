import { IProperty } from "./IProperty";

export interface IPropertyPictures {
  handleOpenAllPicturesModal: () => void;
  selectedProperty: IProperty | undefined;
  propertyId: number;
}
