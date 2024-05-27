import { useQuery } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";

export const useProperties = () => {
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
