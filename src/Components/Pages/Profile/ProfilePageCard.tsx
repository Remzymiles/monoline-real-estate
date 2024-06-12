import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUpdateUserProfileInfo } from "../../../base/hooks/profilePage/useUpdateUserProfileInfo";
import { IProfileInfo } from "../../../base/interface/profilePage/IProfileInfo";
import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { EditPassword } from "./EditPassword";
import { EditProfileFormValidator } from "./EditProfileFormValidator";
import { ProfileImage } from "./ProfileImage";

export const ProfilePageCard = () => {
  //
  const { mutate } = useUpdateUserProfileInfo();
  //
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IProfileInfo>({
    resolver: yupResolver(EditProfileFormValidator),
  });
  //
  const handleEditProfile = (data: IProfileInfo) => {
    reset();
    mutate(data);
    console.log(data);
  };
  //
  return (
    <div className="">
      <h1 className="text-2xl font-bold capitalize mb-8 text-center">
        edit profile
      </h1>
      <div className="flex gap-20 justify-evenly tablet-below:flex-col tablet-below:justify-center tablet-below:items-center">
        <ProfileImage />
        {/*  */}
        <div className="border dark:border-gray-400 rounded-md w-[600px] mobile:w-full  px-3 py-1">
          {/*  */}
          <EditPassword />
          <form onSubmit={handleSubmit(handleEditProfile)} noValidate>
            <div className="mb-4">
              <Input
                htmlFor="fullName"
                id="fullName"
                name="fullName"
                nameOfInput="fullname"
                placeholder="fullname"
                inputType="text"
                register={register}
                extraStyle={`${
                  errors.fullName
                    ? "border-b-2 border-red-600 focus:border-red-600"
                    : "border-black"
                }`}
              />
              {errors.fullName && (
                <p className="text-right text-sm text-red-500">
                  {errors?.fullName.message}
                </p>
              )}
            </div>
            {/*  */}
            <div className="mb-4">
              <Input
                htmlFor="mobile_number"
                id="mobile_number"
                name="mobile_number"
                nameOfInput="mobile number"
                placeholder="mobile number"
                inputType="tel"
                maxLength={14}
                register={register}
                extraStyle={`${
                  errors.mobile_number
                    ? "border-b-2 border-red-600 focus:border-red-600"
                    : "border-black"
                }`}
              />
              {errors.mobile_number && (
                <p className="text-right text-sm text-red-500">
                  {errors?.mobile_number.message}
                </p>
              )}
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
                register={register}
                extraStyle={`${
                  errors.location
                    ? "border-b-2 border-red-600 focus:border-red-600"
                    : "border-black"
                }`}
              />
              {errors.location && (
                <p className="text-right text-sm text-red-500">
                  {errors?.location.message}
                </p>
              )}
            </div>
            {/*  */}
            <div className="mb-3">
              <FormButton children="update profile" />
            </div>
          </form>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
