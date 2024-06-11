import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";

export const useRemovePropertyFromWishlist = () => {
  const queryClient = useQueryClient();
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: async (wishlistPropertyId: string): Promise<void> => {
      const { error } = await supabase
        .from("wishlist_properties")
        .delete()
        .eq("property_id", wishlistPropertyId)
        .eq("user_id", userId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Property has been removed from Wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist_properties"] });
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
