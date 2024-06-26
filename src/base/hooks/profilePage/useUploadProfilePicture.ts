import { toast } from "sonner";
import supabase from "../../../config/supabaseClient";

export const uploadProfilePicture = async (
  userId: string,
  file: File
): Promise<string | null> => {
  //
  try {
    const filePath = `public/${userId}/profile_picture.png`;

    const { error: uploadError } = await supabase.storage
      .from("profile_picture")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      throw new Error(`File upload error: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabase.storage
      .from("profile_picture")
      .getPublicUrl(filePath);

    if (!publicUrlData || !publicUrlData.publicUrl) {
      throw new Error("Failed to retrieve public URL for the uploaded file");
    }
    // 

    const newUrl = `${publicUrlData.publicUrl}?t=${new Date().getTime()}`;
    // 

    const { error: upsertError } = await supabase
      .from("user_profile")
      .upsert(
        { profile_picture_url: newUrl, user_id: userId },
        { onConflict: "user_id" }
      );

    if (upsertError) {
      throw new Error(`Upsert error: ${upsertError.message}`);
    }

    toast.success("Profile picture updated successfully");
    return newUrl;
  } catch (error: any) {
    console.error("Error updating profile picture:", error.message);
    return null;
  }
};
