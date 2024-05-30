export interface ICartPropertyIdsStore {
  propertyIds: string[];
  updateCartPropertyIds: (newPropertyId: string) => void;
  removePropertyId: (propertyId: string) => void;
  clearCartPropertyIds: () => void;
}
