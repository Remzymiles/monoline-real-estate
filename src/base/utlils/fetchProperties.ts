import { useQuery } from "@tanstack/react-query";
import supabase from "../../config/supabaseClient";

const fetchProperties = async () => {
  const { data, error } = await supabase.from("properties").select(`
      property_id,
      description,
      price,
      mortgage,
      propertyLocation (
        address,
        city,
        state,
        country
      ),
      propertyDetails (
        beds,
        baths,
        sqft
      ),
      propertyPhotos (
        photo_url
      )
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });
};
