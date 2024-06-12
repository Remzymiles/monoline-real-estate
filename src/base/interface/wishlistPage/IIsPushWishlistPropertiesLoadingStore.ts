export interface IIsPushWishlistPropertiesLoadingStore {
  IsPushWishlistPropertiesLoading: { [propertyId: string]: boolean };
  setIsPushWishlistPropertiesLoading: (propertyId: string, isInWishlist: boolean) => void;
}