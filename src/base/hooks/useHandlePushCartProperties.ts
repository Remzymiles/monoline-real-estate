import { toast } from "sonner";
import supabase from "../../config/supabaseClient";
import { IProperty } from "../interface/IProperty";
import { useUserIdStore } from "../store/useUserIdStore";
import { useProperties } from "./useFetchAllProperties";

export const useHandlePushCartProperties = () => {
  const { data: properties } = useProperties();

  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //
  const pushCartProperties = async (propertyId: string) => {
    const cartProperties = properties?.filter(
      (property: IProperty) => property.property_id === propertyId
    );

    if (!cartProperties || cartProperties.length === 0) {
      toast.error("Property not found");
      return;
    }

    const checkIfPropertyExistsInCart = async (
      userId: string,
      propertyId: string
    ) => {
      const { data, error } = await supabase
        .from("cart_properties")
        .select("property_id")
        .eq("user_id", userId)
        .eq("property_id", propertyId);

      if (error) {
        console.error("Error checking property existence:", error.message);
        return false;
      }

      return data && data.length > 0;
    };

    const insertData = async (tableName: string, data: any) => {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert(data);

      if (error) {
        console.error("Error inserting data:", error.message);
        return;
      }

      console.log("Data inserted successfully:", insertedData);
      toast.success("Property has been added to Cart");
    };

    for (const property of cartProperties) {
      const propertyExistsInCart = await checkIfPropertyExistsInCart(
        userId,
        property.property_id
      );

      if (propertyExistsInCart) {
        toast("Property is already in the cart");
      } else {
        const dataToInsert = {
          user_id: userId,
          property_id: property.property_id,
          description: property.description,
          price: property.price,
          mortgage: property.mortgage,
          address: property.propertyLocation.address,
          city: property.propertyLocation.city,
          state: property.propertyLocation.state,
          country: property.propertyLocation.country,
          beds: property.propertyDetails.beds,
          baths: property.propertyDetails.baths,
          sqft: property.propertyDetails.sqft,
          property_photo_urls: property.propertyPhotos[0].url,
        };

        await insertData("cart_properties", dataToInsert);
      }
    }
  };

  return { pushCartProperties };
};
