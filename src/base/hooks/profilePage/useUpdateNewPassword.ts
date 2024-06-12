import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import supabase from "../../../config/supabaseClient";
import { IEditPassword } from "../../interface/profilePage/IEditPassword";

export const useUpdateNewPassword = (reset: () => void) => {
  const { mutate } = useMutation({
    mutationFn: async (data: IEditPassword) => {
      const response = await supabase.auth.updateUser({
        password: data.new_password,
      });
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response;
    },
    onSuccess: () => {
      reset();
      toast.success("New Password Has Been Updated");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return { mutate };
};
