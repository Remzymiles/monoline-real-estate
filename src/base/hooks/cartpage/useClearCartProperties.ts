import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useFetchCartProperties } from "./useFetchCartProperties";
import { useUserIdStore } from "../../store/useUserIdStore";
import supabase from "../../../config/supabaseClient";
import { useCheckoutStore } from "../../store/checkoutPage/useCheckoutStore";

export const useClearCartProperties = () => {
  useFetchCartProperties();
  //
  const queryClient = useQueryClient();
  const { isPropertyFromCart } = useCheckoutStore((state) => ({
    isPropertyFromCart: state.isPropertyFromCart,
  }));
  //
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));
  //

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: async (): Promise<void> => {
      if (isPropertyFromCart === true) {
        const { error } = await supabase
          .from("cart_properties")
          .delete()
          .eq("user_id", userId);

        if (error) {
          throw new Error(error.message);
        }
      }
    },
    onSuccess: () => {
      if (isPropertyFromCart === true) {
        queryClient.invalidateQueries({ queryKey: ["cart_properties"] });
      }
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
