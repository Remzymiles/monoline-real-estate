export interface ICartProperty{
    id: string
    user_id: string
    description:string
    price: number
    mortgage: number
    beds: number
    baths: number
    address: string
    city: string
    state: string
    country: string
    property_photo_urls: string[];
}