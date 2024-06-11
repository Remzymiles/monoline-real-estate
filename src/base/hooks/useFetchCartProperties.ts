import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { useCartLengthStore } from "../store/useCartLengthStore";
import { useUserIdStore } from "../store/useUserIdStore";

export const useFetchCartProperties = () => {
  const queryClient = useQueryClient();
  const { updateCartLength } = useCartLengthStore((state) => ({
    updateCartLength: state.updateCartLength,
  }));

  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));

  useEffect(() => {
    if (!userId) return;

    const fetchCartLength = async () => {
      const { count, error } = await supabase
        .from("cart_properties")
        .select("*", { count: "exact" })
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching cart length:", error.message);
        return;
      }

      updateCartLength(count ?? 0);
    };

    fetchCartLength();

    const subscription = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cart_properties" },
        async () => {
          await fetchCartLength();
          queryClient.invalidateQueries({
            queryKey: ["cart_properties", userId],
          });
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [userId, updateCartLength, queryClient]);

  const fetchCartProperties = async () => {
    const { data, error } = await supabase
      .from("cart_properties")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(error.message);
    }

    updateCartLength(data.length);

    return data;
  };

  return useQuery({
    queryKey: ["cart_properties", userId],
    queryFn: fetchCartProperties,
    enabled: !!userId,
  });
};
