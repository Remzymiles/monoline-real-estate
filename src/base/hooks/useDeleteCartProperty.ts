import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import supabase from "../../config/supabaseClient";
import { getAuthData } from "../utils/getAuthData";
import { useEffect, useState } from "react";

export const useDeleteCartProperty = () => {
  const queryClient = useQueryClient();
  // 
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };

    fetchData();
  }, []);

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: async (cartPropertyId: string): Promise<void> => {
      const { error } = await supabase
        .from("cart_properties")
        .delete()
        .eq("property_id", cartPropertyId)
        .eq("user_id", userId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Property has been removed from Cart");
      queryClient.invalidateQueries({ queryKey: ["cart_properties"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });


  return {
    mutate,
    isPending,
    isError,
    error,
    isSuccess,
  };
};
