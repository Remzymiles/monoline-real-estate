import supabase from "../../../config/supabaseClient";
import { IProperty } from "../../interface/IProperty";
import { useCheckoutStore } from "../../store/useCheckoutStore";
import { useUserIdStore } from "../../store/useUserIdStore";
import { useProperties } from "../useFetchAllProperties";

export const useHandlePushOrderHistoryProperties = () => {
  const { data: properties } = useProperties();
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));

  const { checkoutIds } = useCheckoutStore((state) => ({
    checkoutIds: state.checkoutIds,
  }));

  const orderHistoryProperties = properties?.filter((property) => {
    return checkoutIds.includes(property.property_id);
  });

  const pushOrderHistoryProperties = async () => {
    if (!userId || !orderHistoryProperties || orderHistoryProperties.length === 0) {
      console.error("Missing userId or orderHistoryProperties is empty");
      return;
    }

    const propertiesToInsert = orderHistoryProperties.map((property: IProperty) => ({
      user_id: userId,
      property_id: property.property_id,
      description: property.description,
      address: property.propertyLocation.address,
      city: property.propertyLocation.city,
      state: property.propertyLocation.state,
      country: property.propertyLocation.country,
      beds: property.propertyDetails.beds,
      baths: property.propertyDetails.baths,
      sqft: property.propertyDetails.sqft,
      price: property.price,
      mortgage: property.mortgage,
      property_photo_url: property.propertyPhotos[0].url[4],
    }));

    console.log(propertiesToInsert);

    try {
      const { error } = await supabase
        .from("order_history_properties")
        .insert(propertiesToInsert);

      if (error) throw error;

      console.log("Order history properties pushed successfully");
    } catch (error) {
      console.error("Error pushing order history properties:", error);
    }
  };

  return { pushOrderHistoryProperties };
};
