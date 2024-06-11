import { useCallback, useEffect } from "react";
import { toast } from "sonner";
import supabase from "../../../config/supabaseClient";
import { IProperty } from "../../interface/IProperty";
import { useHandleIsPropertyInWishlist } from "../../store/useHandleIsPropertyInWishlistStore";
import { useIsPushWishlistPropertiesLoadingStore } from "../../store/useIsPushWishlistPropertiesLoadingStore";
import { useUserIdStore } from "../../store/useUserIdStore";
import { useProperties } from "../useFetchAllProperties";
import { useRemovePropertyFromWishlist } from "./useRemovePropertyFromWishlist";

export const useHandlePushWishlistProperties = () => {
  const { data: properties } = useProperties();
  const { mutate: removeFromWishlist } = useRemovePropertyFromWishlist();
  const { setIsPropertyInWishlist } = useHandleIsPropertyInWishlist();
  //
  const { userId } = useUserIdStore((state) => ({ userId: state.userId }));
  //
  const {
    setIsPushWishlistPropertiesLoading,
    IsPushWishlistPropertiesLoading,
  } = useIsPushWishlistPropertiesLoadingStore((state) => ({
    IsPushWishlistPropertiesLoading: state.IsPushWishlistPropertiesLoading,
    setIsPushWishlistPropertiesLoading:
      state.setIsPushWishlistPropertiesLoading,
  }));
  //

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
        console.log(insertedWishlistProperties);

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
      setIsPushWishlistPropertiesLoading(propertyId, true);
      //
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
          const propertyExistsInWishlist =
            await checkIfPropertyExistsInWishlist(userId, property.property_id);

          if (propertyExistsInWishlist) {
            removeFromWishlist(property.property_id);
            setIsPushWishlistPropertiesLoading(propertyId, false);
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

            await insertWishlistProperties(
              "wishlist_properties",
              propertyToInsert
            );
          }
        } catch (error) {
          console.error("Error in pushWishlistProperties:", error);
          setIsPushWishlistPropertiesLoading(propertyId, false);
          toast.error("couldn't add property to wishlist");
        }
      }
      setIsPushWishlistPropertiesLoading(propertyId, false);
      //
    },
    [
      userId,
      properties,
      checkIfPropertyExistsInWishlist,
      insertWishlistProperties,
      removeFromWishlist,
      setIsPropertyInWishlist,
      setIsPushWishlistPropertiesLoading,
    ]
    //
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

  return {
    pushWishlistProperties,
    checkIfPropertyExistsInWishlist,
    IsPushWishlistPropertiesLoading,
  };
};
