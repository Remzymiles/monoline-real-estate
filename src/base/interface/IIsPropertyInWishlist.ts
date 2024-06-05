export interface IIsPropertyInWishlist {
  propertiesInWishlist: { [propertyId: string]: boolean };
  setIsPropertyInWishlist: (propertyId: string, isInWishlist: boolean) => void;
}
