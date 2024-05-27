export interface IProperty {
  property_id: number;
  description: string;
  price: number;
  mortgage: number;
  propertyLocation: ILocation;
  propertyDetails: IDetails;
  propertyPhotos: { url: string[] }[];
  orderDate?: string;
  images?: {
    url: string;
  }[];
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
