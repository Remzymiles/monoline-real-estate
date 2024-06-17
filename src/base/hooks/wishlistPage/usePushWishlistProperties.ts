import { useEffect } from "react";
import { toast } from "sonner";
import { IProperty } from "../../../Layouts/interface/IProperty";
import supabase from "../../../config/supabaseClient";
import { IWishlistProperty } from "../../interface/wishlistPage/IWishlistProperty";
import { useUserIdStore } from "../../store/useUserIdStore";
import { useIsPushWishlistPropertiesLoadingStore } from "../../store/wishlistPage/useIsPushWishlistPropertiesLoadingStore";
import { useWishlistPropertyStore } from "../../store/wishlistPage/useWishlistPropertyStore";
import { useAllProperties } from "../useFetchAllProperties";
import { useFetchWishlistProperties } from "./useFetchWishlistProperties";
import { useRemovePropertyFromWishlist } from "./useRemovePropertyFromWishlist";

export const usePushWishlistProperties = () => {
  const { data: properties } = useAllProperties();
  const { mutate: removeFromWishlist } = useRemovePropertyFromWishlist();
  const { userId } = useUserIdStore((state) => ({ userId: state.userId }));
  const { wishlistProperty } = useWishlistPropertyStore();
  useFetchWishlistProperties();
  //

  const { setIsPushWishlistPropertiesLoading } =
    useIsPushWishlistPropertiesLoadingStore();
  //

  const isPropertyInWishlist = (propertyId: string) => {
    return wishlistProperty.some(
      (property) => property.property_id === propertyId
    );
  };
  //

  const insertWishlistProperties = async (
    tableName: string,
    property: IWishlistProperty
  ) => {
    //
    const { error } = await supabase.from(tableName).insert(property);
    //
    if (error) {
      console.error("Error inserting data:", error.message);
      throw new Error(error.message);
    }
    //
    toast.success("Property has been added to Wishlist");
  };

  const pushWishlistProperties = async (propertyId: string) => {
    //
    setIsPushWishlistPropertiesLoading(propertyId, true);

    if (!userId) {
      toast.error("Login or Sign up to add to wishlist");
      setIsPushWishlistPropertiesLoading(propertyId, false);
      return;
    }
    //

    const wishlistProperties = properties?.filter(
      (property: IProperty) => property.property_id === propertyId
    );
    //

    if (!wishlistProperties || wishlistProperties.length === 0) {
      toast.error("Something went wrong. Try again");
      setIsPushWishlistPropertiesLoading(propertyId, false);
      return;
    }
    //

    try {
      for (const property of wishlistProperties) {
        const propertyExistsInWishlist = isPropertyInWishlist(
          property.property_id
        );

        if (propertyExistsInWishlist) {
          await new Promise<void>((resolve, reject) => {
            removeFromWishlist(property.property_id, {
              onSuccess: resolve,
              onError: reject,
            });
          });
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
      }
    } catch (error) {
      toast.error("Something went wrong. Try again");
    } finally {
      setIsPushWishlistPropertiesLoading(propertyId, false);
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "wishlist_properties" },
        (payload) => {}
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return {
    pushWishlistProperties,
    isPropertyInWishlist,
  };
};
