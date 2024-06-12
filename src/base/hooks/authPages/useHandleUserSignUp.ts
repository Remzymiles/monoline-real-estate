import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import supabase from "../../../config/supabaseClient";
import { IUser } from "../../interface/authPages/IUser";

export const useHandleUserSignUp = (reset: () => void) => {
  //
  const redirect = useNavigate();
  //
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IUser) => {
      const response = await supabase.auth.signUp({
        email: data.email_address,
        password: data.password,
        options: { data: { fullname: data.fullname } },
      });
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response;
    },
    onSuccess: () => {
      reset();
      redirect("/");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  return { mutate, isPending };
};
