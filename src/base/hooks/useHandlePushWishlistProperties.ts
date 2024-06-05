import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import supabase from "../../config/supabaseClient";
import { IProperty } from "../interface/IProperty";
import { useHandleIsPropertyInWishlist } from "../store/useHandleIsPropertyInWishlistStore";
import { useProperties } from "../utils/fetchProperties";
import { getAuthData } from "../utils/getAuthData";
import { useRemovePropertyFromWishlist } from "./useRemovePropertyFromWishlist";

export const useHandlePushWishlistProperties = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const { data: properties } = useProperties();
  const { mutate: removeFromWishlist } = useRemovePropertyFromWishlist();
  const { setIsPropertyInWishlist } = useHandleIsPropertyInWishlist();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };

    fetchData();
  }, []);

  const checkIfPropertyExistsInWishlist = useCallback(
    async (userId: string, propertyId: string) => {
      if (!userId) {
        return false;
      }

      try {
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
      } catch (error) {
        console.error("Error in checkIfPropertyExistsInWishlist:", error);
        return false;
      }
    },
    []
  );

  const insertWishlistProperties = useCallback(
    async (tableName: string, data: any) => {
      try {
        const { data: insertedWishlistProperties, error } = await supabase
          .from(tableName)
          .insert(data);

        if (error) {
          console.error("Error inserting data:", error.message);
          return;
        }

        toast.success("Property has been added to Wishlist");
        setIsPropertyInWishlist(data.property_id, true);
      } catch (error) {
        console.error("Error in insertWishlistProperties:", error);
      }
    },
    [setIsPropertyInWishlist]
  );

  const pushWishlistProperties = useCallback(
    async (propertyId: string) => {
      if (!userId) {
        console.error("User ID is not set");
        return;
      }

      const wishlistProperties = properties?.filter(
        (property: IProperty) => property.property_id === propertyId
      );

      if (!wishlistProperties || wishlistProperties.length === 0) {
        toast.error("Property not found");
        return;
      }

      for (const property of wishlistProperties) {
        try {
          const propertyExistsInWishlist = await checkIfPropertyExistsInWishlist(
            userId,
            property.property_id
          );

          if (propertyExistsInWishlist) {
            removeFromWishlist(property.property_id);
            setIsPropertyInWishlist(property.property_id, false);
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
        } catch (error) {
          console.error("Error in pushWishlistProperties:", error);
        }
      }
    },
    [
      userId,
      properties,
      checkIfPropertyExistsInWishlist,
      insertWishlistProperties,
      removeFromWishlist,
      setIsPropertyInWishlist,
    ]
  );

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "wishlist_properties" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setIsPropertyInWishlist(payload.new.property_id, true);
          } else if (payload.eventType === "DELETE") {
            setIsPropertyInWishlist(payload.old.property_id, false);
          }
          console.log("Change received!", payload);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [setIsPropertyInWishlist]);

  return { pushWishlistProperties, checkIfPropertyExistsInWishlist };
};
