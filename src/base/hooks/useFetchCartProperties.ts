import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import { useCartLengthStore } from "../store/useCartLengthStore";
import { getAuthData } from "../utils/getAuthData";

export const useFetchCartProperties = () => {
  const queryClient = useQueryClient();
  //
  const [userId, setUserId] = useState("");
  //
  const { updateCartLength } = useCartLengthStore((state) => ({
    updateCartLength: state.updateCartLength,
  }));

  useEffect(() => {
    const fetchUserId = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };

    fetchUserId();
  }, []);
  //

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

    supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cart_properties" },
        async () => {
          await fetchCartLength();
          queryClient.invalidateQueries({ queryKey: ["cart_properties"] });
        }
      )
      .subscribe();
  }, [userId, updateCartLength]);
  //

  const fetchCartProperties = async () => {
    const { data, error } = await supabase
      .from("cart_properties")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  return useQuery({
    queryKey: ["cart_properties", userId],
    queryFn: fetchCartProperties,
    enabled: !!userId,
  });
};
