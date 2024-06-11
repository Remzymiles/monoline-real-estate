import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { useUserIdStore } from "../store/useUserIdStore";
import { getAuthData } from "./useGetAuthData";

export const useProperties = () => {
  // 
  const { setUserId } = useUserIdStore((state) => ({
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
  const fetchProperties = async () => {
    const { data, error } = await supabase.from("properties").select(`*`);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };
  return useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });
};
