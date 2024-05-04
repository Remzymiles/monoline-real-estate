import { ChangeEvent, useState } from "react";
import { useProfilePhotoStore } from "../../../base/store/useProfilePhotoStore";
import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { CameraIcon } from "../../Icons/CameraIcon";
import { UserProfileIcon } from "../../Icons/UserProfileIcon";
import { EditEmailAndPassword } from "./EditEmailAndPassword";

export const ProfilePageCard = () => {
  //
  const [selectedFile, setSelectedFile] = useState<string | File>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const fileName = file.name;
      updateProfilePhotoUrl(fileName);
    } else {
      console.log("No file selected");
    }
  };
  //
  const { updateProfilePhotoUrl } = useProfilePhotoStore((state) => ({
    updateProfilePhotoUrl: state.updateProfilePhotoUrl,
  }));
  //
  return (
    <div className="">
      <h1 className="text-2xl font-bold capitalize mb-8 text-center">
        edit profile
      </h1>
      <div className="flex gap-20 justify-evenly tablet-below:flex-col tablet-below:justify-center tablet-below:items-center">
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
                  className="w-[100%] h-[100%] object-cover rounded-full border-2"
                />
              </div>
            ) : (
              <UserProfileIcon extraStyle="text" iconStyle="text-9xl translate-y-10" />
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
        {/*  */}
        {/*  */}
        <div className="border rounded-md w-[600px] mobile:w-full  px-3 py-1 ">
          <EditEmailAndPassword />
          {/*  */}
          <form>
            <div className="mb-4">
              <Input
                htmlFor="fullname"
                id="fullname"
                name="full name"
                nameOfInput="fullname"
                placeholder="fullname"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4">
              <Input
                htmlFor="phone"
                id="phone"
                name="phone number"
                nameOfInput="phone"
                placeholder="phone"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-4">
              <Input
                htmlFor="location"
                id="location"
                name="location"
                nameOfInput="location"
                placeholder="location"
                inputType="text"
                register={() => {}}
                extraStyle={``}
              />
            </div>
            {/*  */}
            <div className="mb-3">
              <FormButton name="save profile" />
            </div>
          </form>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
