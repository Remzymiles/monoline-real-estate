import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useProfilePhotoStore } from "../../../base/store/useProfilePhotoStore";
import { getAuthData } from "../../../base/utils/getAuthData";
import supabase from "../../../config/supabaseClient";
import { CameraIcon } from "../../Icons/CameraIcon";
import { UserProfileIcon } from "../../Icons/UserProfileIcon";

export const ProfileImage = () => {
  //
  // const [profilePicture, setProfilePicture] = useState<string>("");
  // const [userId, setUserId] = useState("");
  //
  const { updateProfilePhotoUrl, profilePhotoUrl } = useProfilePhotoStore(
    (state) => ({
      updateProfilePhotoUrl: state.updateProfilePhotoUrl,
      profilePhotoUrl: state.profilePhotoUrl,
    })
  );
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getAuthData();
  //     if (data) {
  //       setUserId(data.user.id);
  //     }
  //   };

  //   fetchData();
  // }, []);
  //
  // const { mutate } = useMutation({
  //   mutationFn: async ({ imageUrl }: { imageUrl: string }) => {
  //     const { error } = await supabase
  //       .from("userProfilePicture")
  //       .update({ profile_photo_url: imageUrl })
  //       .eq("id", userId);

  //     if (error) {
  //       throw new Error(error.message);
  //     }

  //     return "Profile image URL updated successfully";
  //   },
  //   onSuccess: () => {
  //     toast.success("Profile image updated successfully!");
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });
  //
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      // mutate({ imageUrl });
      updateProfilePhotoUrl(URL.createObjectURL(file));
      // setProfilePicture(URL.createObjectURL(file));
    } else {
      console.log("No file selected");
    }
  };
  //
  return (
    <div className="flex flex-col gap-y-16 items-center">
      <div className="tablet-above:w-[300px] tablet-above:h-[300px] w-[250px] h-[250px] bg-black rounded-full flex justify-center relative">
        <div className="text-9xl text-white">
          {profilePhotoUrl ? (
            <div className="w-[250px] h-[250px] tablet-above:w-[300px] tablet-above:h-[300px]">
              <img
                src={profilePhotoUrl}
                alt="img"
                className="w-[100%] h-[100%] object-cover rounded-full"
              />
            </div>
          ) : (
            <UserProfileIcon
              extraStyle="text"
              iconStyle="text-9xl translate-y-10"
            />
          )}
        </div>
        <label
          htmlFor="fileInput"
          className="border dark:border-gray-400 shadow-lg transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-secondaryColor-dark/80 flex gap-x-2 justify-center absolute -bottom-10 px-3 py-0.5 rounded-lg"
        >
          <CameraIcon /> <span className="capitalize font-bold">edit</span>
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="hidden">
        <div className="flex gap-x-2 mb-2">
          <p className="text-lg font-extrabold capitalize">name</p>:
          <p className="text-lg font-bold capitalize">
            Nwankwo Somtochukwu Stanley
          </p>
        </div>
        <div className="flex gap-x-2 mb-2">
          <p className="text-lg font-extrabold capitalize">phone number</p>:
          <p className="text-lg font-bold capitalize">08164228668</p>
        </div>
        <div className="flex gap-x-2 mb-2">
          <p className="text-lg font-extrabold capitalize">address</p>:
          <p className="text-lg font-bold capitalize">
            no 1 amaigbo lane, ziks avenue, enugu
          </p>
        </div>
      </div>
    </div>
  );
};
