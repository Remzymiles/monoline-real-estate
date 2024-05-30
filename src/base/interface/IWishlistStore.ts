export interface IWishlistStore {
  wishlistPropertyIds: string[];
  updateWishlistPropertyIds: (newWishlistPropertyId: string) => void;
  removeWishlistPropertyId: (propertyId: string)=> void
  clearWishlistPropertyIds: () => void;
}
