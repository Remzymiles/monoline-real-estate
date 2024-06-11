import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useFetchCartProperties } from "../cartpage/useFetchCartProperties";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";

export const useClearOrderHistory = () => {
  useFetchCartProperties();
  //
  const queryClient = useQueryClient();
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: async (): Promise<void> => {
      const { error } = await supabase
        .from("order_history_properties")
        .delete()
        .eq("user_id", userId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Order History has been cleared");
      queryClient.invalidateQueries({ queryKey: ["order_history_properties"] });
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
