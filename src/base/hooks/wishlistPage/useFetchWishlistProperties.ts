import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useUserIdStore } from "../../store/useUserIdStore";
import { useWishlistPropertyStore } from "../../store/wishlistPage/useWishlistPropertyStore";

export const useFetchWishlistProperties = () => {
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //
  const { updateWishlistProperty } = useWishlistPropertyStore();

  const queryClient = useQueryClient();

  const fetchWishlistProperties = async () => {
    if (!userId) {
      throw new Error("User ID is not available");
    }

    const { data, error } = await supabase
      .from("wishlist_properties")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const query = useQuery({
    queryKey: ["wishlist_properties", userId],
    queryFn: fetchWishlistProperties,
    enabled: !!userId,
  });
  //
  useEffect(() => {
    query.data && updateWishlistProperty(query.data);
  }, [query.data]);

  useEffect(() => {
    if (!userId) return;

    const channel = supabase
      .channel("realtime:wishlist_properties")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "wishlist_properties",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          queryClient.invalidateQueries({
            queryKey: ["wishlist_properties", userId],
          });
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [userId, queryClient]);

  return query;
};
