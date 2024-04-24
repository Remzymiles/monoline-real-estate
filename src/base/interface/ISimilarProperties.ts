import { IProperty } from "./IProperty";

export interface ISimilarProperty {
  selectedProperty: IProperty | undefined;
  similarProperties: IProperty[];
}
