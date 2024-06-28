import { ChangeEvent, useEffect } from "react";
import { toast } from "sonner";
import { useFetchProfilePicture } from "../../../base/hooks/profilePage/useFetchProfilePicture";
import { useFetchUserProfileInfo } from "../../../base/hooks/profilePage/useFetchUserProfile";
import { uploadProfilePicture } from "../../../base/hooks/profilePage/useUploadProfilePicture";
import { getAuthData } from "../../../base/hooks/useGetAuthData";
import { useUserIdStore } from "../../../base/store/useUserIdStore";
import { ProfileInfoLoadingSkeleton } from "../../Global/Loaders/ProfileInfoLoadingSkeleton";
import { WaveFormLoader } from "../../Global/Loaders/WaveFormLoader";
import { CameraIcon } from "../../Icons/CameraIcon";
import { UserProfileIcon } from "../../Icons/UserProfileIcon";

export const ProfileImage = () => {
  //
  const { data: userProfileInfo, isLoading: isProfileInfoLoading } =
    useFetchUserProfileInfo();
  //
  const { userId, setUserId } = useUserIdStore((state) => ({
    userId: state.userId,
    setUserId: state.setUserId,
  }));
  //

  const {
    data: profilePhotoUrl,
    isLoading: isProfilePhotoUrlLoading,
    refetch: refetchProfilePicture,
  } = useFetchProfilePicture();
  //

  useEffect(() => {
    const fetchUserId = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };
    fetchUserId();
  }, [setUserId]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await uploadProfilePicture(userId, file);
      refetchProfilePicture();
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div className="flex flex-col gap-y-16 items-center">
      <div className="tablet-above:w-[300px] tablet-above:h-[300px] w-[250px] h-[250px] bg-black/80 rounded-full flex justify-center relative">
        <div className="text-9xl text-white">
          {isProfilePhotoUrlLoading ? (
            <div className="w-[250px] h-[250px] tablet-above:w-[300px] tablet-above:h-[300px] flex justify-center items-center">
              <WaveFormLoader extraStyle="bg-white" />
            </div>
          ) : profilePhotoUrl ? (
            <div className="w-[250px] h-[250px] tablet-above:w-[300px] tablet-above:h-[300px]">
              <img
                src={profilePhotoUrl}
                alt="Profile"
                className="w-[100%] h-[100%] object-cover rounded-full"
              />
            </div>
          ) : (
            !profilePhotoUrl && (
              <UserProfileIcon
                extraStyle="text"
                iconStyle="text-9xl translate-y-10"
              />
            )
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
      {isProfileInfoLoading && <ProfileInfoLoadingSkeleton />}
      {userProfileInfo?.fullName && (
        <div>
          <div className="flex gap-x-1.5 mb-2 items-center">
            <p className="font-extrabold capitalize">name</p>:
            <p className="text-sm font-bold capitalize">
              {userProfileInfo?.fullName}
            </p>
          </div>
          {/*  */}
          <div className="flex gap-x-1.5 mb-2 items-center">
            <p className="font-extrabold capitalize">phone number</p>:
            <p className="text-sm font-bold capitalize">
              {userProfileInfo?.mobile_number}
            </p>
          </div>
          {/*  */}
          <div className="flex gap-x-1.5 mb-2 items-center">
            <p className="font-extrabold capitalize">address</p>:
            <p className="text-sm font-bold capitalize">
              {userProfileInfo?.location}
            </p>
          </div>
          {/*  */}
        </div>
      )}
    </div>
  );
};
