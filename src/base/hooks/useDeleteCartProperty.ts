import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import supabase from "../../config/supabaseClient";
import { useUserIdStore } from "../store/useUserIdStore";

export const useDeleteCartProperty = () => {
  const queryClient = useQueryClient();
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //

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
