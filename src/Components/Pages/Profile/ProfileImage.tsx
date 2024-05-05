import { ChangeEvent, useState } from "react";
import { useProfilePhotoStore } from "../../../base/store/useProfilePhotoStore";
import { CameraIcon } from "../../Icons/CameraIcon";
import { UserProfileIcon } from "../../Icons/UserProfileIcon";

export const ProfileImage = () => {
  //
  const [selectedFile, setSelectedFile] = useState<string | File>("");

  const { updateProfilePhotoUrl } = useProfilePhotoStore((state) => ({
    updateProfilePhotoUrl: state.updateProfilePhotoUrl,
  }));
  //
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      updateProfilePhotoUrl(URL.createObjectURL(file));
    } else {
      console.log("No file selected");
    }
  };

  //
  return (
    <>
      <div className="tablet-above:w-[300px] tablet-above:h-[300px] w-[250px] h-[250px] bg-black rounded-full flex justify-center relative">
        <div className="text-9xl text-white">
          {selectedFile ? (
            <div className="w-[250px] h-[250px] tablet-above:w-[300px] tablet-above:h-[300px]">
              <img
                src={
                  typeof selectedFile === "string"
                    ? selectedFile
                    : URL.createObjectURL(selectedFile)
                }
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
          className="border shadow-lg transition-colors duration-300 hover:bg-slate-100 flex gap-x-2 justify-center absolute -bottom-10 px-3 py-0.5 rounded-lg"
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
    </>
  );
};
