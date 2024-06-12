import { IProperty } from "../../../Layouts/interface/IProperty";

export interface ISimilarProperty {
  selectedProperty: IProperty | undefined;
  similarProperties: IProperty[];
}
