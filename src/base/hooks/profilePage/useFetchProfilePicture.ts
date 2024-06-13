import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";

export const useFetchProfilePicture = () => {
  //
  const queryClient = useQueryClient();
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //

  const fetchProfilePicture = async () => {
    if (!userId) throw new Error("User ID is missing");

    const { data, error } = await supabase
      .from("user_profile")
      .select("profile_picture_url")
      .eq("user_id", userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data?.profile_picture_url || "";
  };
  //

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
          console.log("Profile picture updated:", payload);
          queryClient.invalidateQueries({
            queryKey: ["user_profile_picture_url", userId],
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [userId, queryClient]);
  //

  return useQuery({
    queryKey: ["user_profile_picture_url", userId],
    queryFn: fetchProfilePicture,
    enabled: !!userId,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
