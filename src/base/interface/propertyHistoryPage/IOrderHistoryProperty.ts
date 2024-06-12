export interface IOrderHistoryProperty {
  property_id: string;
  user_id: string;
  description: string;
  price: number;
  mortgage: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  country: string;
  order_date?: string;
  property_photo_url: string;
}
