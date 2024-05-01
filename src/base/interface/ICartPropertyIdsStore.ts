export interface ICartPropertyIdsStore {
  propertyIds: number[];
  updatePropertyIds: (newPropertyId: number) => void;
  removePropertyId: (propertyId: number) => void;
  clearPropertyIds: () => void;
}
