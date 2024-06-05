import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import { getAuthData } from "../utils/getAuthData";

export const useFetchWishlistProperties = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const data = await getAuthData();
        if (data && data.user) {
          setUserId(data.user.id);
        }
      } catch (error) {
        console.error("Failed to fetch user ID", error);
      }
    };

    fetchUserId();
  }, []);
  //
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

  return useQuery({
    queryKey: ["wishlist_properties", userId],
    queryFn: fetchWishlistProperties,
    enabled: !!userId, 
  });
};
