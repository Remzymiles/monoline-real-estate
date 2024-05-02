export interface IWishlistStore {
  wishlistPropertyIds: number[];
  updateWishlistPropertyIds: (newWishlistPropertyId: number) => void;
  removeWishlistPropertyId: (propertyId: number)=> void
  clearWishlistPropertyIds: () => void;
}
