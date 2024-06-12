import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import supabase from "../../../config/supabaseClient";
import { ILoginUser } from "../../interface/authPages/ILoginUser";

export const useHandleUserLogin = (reset: () => void) => {
  //
  const redirect = useNavigate();
  //
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ILoginUser) => {
      const response = await supabase.auth.signInWithPassword({
        email: data.email_address,
        password: data.password,
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
  //
  return { mutate, isPending };
};
