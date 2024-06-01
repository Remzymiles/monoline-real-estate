import { useQuery } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";

export const useFetchCartProperties = () => {
    const fetchCartProperties = async () => {
        const { data, error } = await supabase.from("cart_properties").select(`*`);
    
        if (error) {
          throw new Error(error.message);
        }
    
        return data;
      };
      return useQuery({
        queryKey: ["cart_properties"],
        queryFn: fetchCartProperties,
      });
};
