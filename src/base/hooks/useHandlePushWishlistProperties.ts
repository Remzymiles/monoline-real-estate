import { useEffect, useState } from "react";
import { useProperties } from "../utils/fetchProperties";
import { getAuthData } from "../utils/getAuthData";
import { IProperty } from "../interface/IProperty";
import { toast } from "sonner";
import supabase from "../../config/supabaseClient";

export const useHandlePushWishlistProperties = () => {
    const [userId, setUserId] = useState("");
    const { data: properties } = useProperties();

    useEffect(() => {
      const fetchData = async () => {
        const data = await getAuthData();
        if (data) {
          setUserId(data.user.id);
        }
      };

      fetchData();
    }, []);

    const pushWishlistProperties = async (propertyId: string) => {
      const wishlistProperties = properties?.filter(
        (property: IProperty) => property.property_id === propertyId
      );

      if (!wishlistProperties || wishlistProperties.length === 0) {
        toast.error("Property not found");
        return;
      }

      const checkIfPropertyExistsInWishlist = async (
        userId: string,
        propertyId: string
      ) => {
        const { data, error } = await supabase
          .from("wishlist_properties")
          .select("property_id")
          .eq("user_id", userId)
          .eq("property_id", propertyId);

        if (error) {
          console.error("Error checking property existence:", error.message);
          return false;
        }

        return data && data.length > 0;
      };

      const insertWishlistProperties = async (tableName: string, data: any) => {
        const { data: insertedWishlistProperties, error } = await supabase
          .from(tableName)
          .insert(data);

        if (error) {
          console.error("Error inserting data:", error.message);
          return;
        }

        console.log("Data inserted successfully:", insertedWishlistProperties);
        toast.success("Property has been added to Wishlist");
      };

      for (const property of wishlistProperties) {
        const propertyExistsInWishlist = await checkIfPropertyExistsInWishlist(
          userId,
          property.property_id
        );

        if (propertyExistsInWishlist) {
          toast("Property is already in the wishlist");
        } else {
          const propertyToInsert = {
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

          await insertWishlistProperties("wishlist_properties", propertyToInsert);
        }
      }
    };

    const checkIfPropertyExistsInWishlist = async (
      userId: string,
      propertyId: string
    ) => {
      const { data, error } = await supabase
        .from("wishlist_properties")
        .select("property_id")
        .eq("user_id", userId)
        .eq("property_id", propertyId);

      if (error) {
        console.error("Error checking property existence:", error.message);
        return false;
      }

      return data && data.length > 0;
    };

    return { pushWishlistProperties, checkIfPropertyExistsInWishlist };
};
