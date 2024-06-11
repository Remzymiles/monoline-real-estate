import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import { useUserIdStore } from "../../store/useUserIdStore";
import { getAuthData } from "../useGetAuthData";
import { useFetchCartProperties } from "../cartpage/useFetchCartProperties";

export const useFetchOrderHistoryProperties = () => {
  const { userId, setUserId } = useUserIdStore((state) => ({
    userId: state.userId,
    setUserId: state.setUserId,
  }));
  //
  useEffect(() => {
    const fetchUserId = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };
    fetchUserId();
  }, [setUserId]);
  //
  useFetchCartProperties();
  //
  const fetchOrderHistoryProperties = async () => {
    if (!userId) {
      throw new Error("User ID is not available");
    }

    const { data, error } = await supabase
      .from("order_history_properties")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Supabase error:", error.message);
      throw new Error(error.message);
    }

    return data;
  };

  return useQuery({
    queryKey: ["order_history_properties", userId],
    queryFn: fetchOrderHistoryProperties,
    enabled: !!userId,
    retry: false,
  });
};
