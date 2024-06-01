import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import supabase from "../../config/supabaseClient";

export const useDeleteCartProperty = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: async (cartPropertyId: string): Promise<void> => {
      const { error } = await supabase
        .from("cart_properties")
        .delete()
        .eq("id", cartPropertyId);

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
