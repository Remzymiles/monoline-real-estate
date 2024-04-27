export interface ICartPropertyIdsStore {
  propertyIds: number[];
  updatePropertyIds: (newPropertyId: number) => void;
  clearPropertyIds: () => void;
}
