export interface IWishlistStore {
  wishlistPropertyIds: number[];
  updateWishlistPropertyIds: (newWishlistPropertyId: number) => void;
  clearWishlistPropertyIds: () => void;
}
