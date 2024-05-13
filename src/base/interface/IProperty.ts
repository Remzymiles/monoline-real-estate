export interface IProperty {
  property_id: number;
  description: string;
  price: number;
  mortgage: number;
  location: ILocation;
  details: IDetails;
  photos: string[];
  orderDate?: string;
}

export interface IDetails {
  beds: number;
  baths: number;
  sqft: number;
}

export interface ILocation {
  address: string;
  city: string;
  state: string;
  country: string;
}
