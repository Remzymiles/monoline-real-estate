import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";

export const useFetchUserProfileInfo = () => {
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  const queryClient = useQueryClient();

  const fetchUserProfileInfo = async () => {
    if (!userId) throw new Error("User ID is missing");

    const { data, error } = await supabase
      .from("user_profile")
      .select("fullName, mobile_number, location")
      .eq("user_id", userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    console.log('Fetched user profile data:', data);  // Debug log

    return data;  // Return the entire data object
  };

  useEffect(() => {
    if (!userId) return;

    const subscription = supabase
      .channel("public:user_profile")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_profile",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          console.log("Profile Info updated:", payload);
          queryClient.invalidateQueries({ queryKey: ["user_profile_info", userId] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [userId, queryClient]);

  return useQuery({
    queryKey: ["user_profile_info", userId],
    queryFn: fetchUserProfileInfo,
    enabled: !!userId,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
