import { IWishlistProperty } from "./IWishlistProperty";

export interface IUseWishlistPropertyStore {
  wishlistProperty: IWishlistProperty[];
  updateWishlistProperty: (properties: IWishlistProperty[]) => void;
}
