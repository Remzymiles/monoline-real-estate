import { useQuery } from "@tanstack/react-query";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";

export const useFetchWishlistProperties = () => {
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
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
