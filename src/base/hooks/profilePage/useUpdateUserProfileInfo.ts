import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserIdStore } from "../../store/useUserIdStore";
import { IProfileInfo } from "../../interface/IProfileInfo";
import supabase from "../../../config/supabaseClient";

export const useUpdateUserProfileInfo = () => {
  const { userId } = useUserIdStore((state) => ({
    userId: state.userId,
  }));

  const mutation = useMutation({
    mutationFn: async (data: IProfileInfo) => {
      const response = await supabase.from("user_profile").upsert(
        {
          fullName: data.fullName,
          mobile_number: data.mobile_number,
          location: data.location,
          user_id: userId,
        },
        { onConflict: "user_id" }
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response.data;
    },
    onSuccess: () => {
      toast.success("Profile has been updated");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return { mutate: mutation.mutate, isLoading: mutation.isPending };
};
