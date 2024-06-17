import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { IProperty } from "../../../Layouts/interface/IProperty";
import supabase from "../../../config/supabaseClient";
import { IWishlistProperty } from "../../interface/wishlistPage/IWishlistProperty";
import { useUserIdStore } from "../../store/useUserIdStore";
import { useHandleIsPropertyInWishlist } from "../../store/wishlistPage/useHandleIsPropertyInWishlistStore";
import { useIsPushWishlistPropertiesLoadingStore } from "../../store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { useAllProperties } from "../useFetchAllProperties";
import { useRemovePropertyFromWishlist } from "./useRemovePropertyFromWishlist";

export const useHandlePushWishlistProperties = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { data: properties } = useAllProperties();
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
          // console.error("Error checking property existence:", error.message);
          return false;
        }
        return data && data.length > 0;
      } catch (error) {
        // console.error("Error in checkIfPropertyExistsInWishlist:", error);
        return false;
      }
    },
    []
  );

  const insertWishlistProperties = useCallback(
    async (tableName: string, data: IWishlistProperty) => {
      try {
        const { data: IWishlistProperty, error } = await supabase
          .from(tableName)
          .insert(data);

        if (error) {
          // console.error("Error inserting data:", error.message);
          return;
        }
        console.log(IWishlistProperty);

        toast.success("Property has been added to Wishlist");
        userId
          ? setIsPropertyInWishlist(data.property_id, true)
          : setIsPropertyInWishlist(data.property_id, false);
      } catch (error) {
        // console.error("Error in insertWishlistProperties:", error);
      }
    },
    [setIsPropertyInWishlist]
  );

  const pushWishlistProperties = useCallback(
    async (propertyId: string) => {
      userId
        ? setIsPushWishlistPropertiesLoading(propertyId, true)
        : setIsPushWishlistPropertiesLoading(propertyId, false);
      //
      if (!userId) {
        toast.error("Login or Sign up to add to wishlist");
        setIsPropertyInWishlist(propertyId, false);
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
          // console.error("Error in pushWishlistProperties:", error);
          setIsPushWishlistPropertiesLoading(propertyId, false);
          toast.error("something went wrong. Try again");
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
          if (payload.eventType === "INSERT" && userId) {
            setIsPropertyInWishlist(payload.new.property_id, true);
          } else if (payload.eventType === "DELETE") {
            setIsPropertyInWishlist(payload.old.property_id, false);
          }
          // console.log("Change received!", payload);
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
    isInWishlist,
  };
};
