export interface ICartPropertyIdsStore {
  propertyIds: number[];
  updateCartPropertyIds: (newPropertyId: number) => void;
  removePropertyId: (propertyId: number) => void;
  clearCartPropertyIds: () => void;
}
