import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { IEditPassword } from "../../../base/interface/IEditPassword";
import supabase from "../../../config/supabaseClient";
import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { EditPasswordValidator } from "./EditPasswordValidator";

export const EditPasswordForm = ({
  handleEditPassword,
  isEditPasswordVisible,
}: {
  handleEditPassword: () => void;
  isEditPasswordVisible: boolean;
}) => {
  //
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IEditPassword>({ resolver: yupResolver(EditPasswordValidator) });
  //
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
  const handleSubmitForm = (data: IEditPassword) => {
    mutate(data);
  };
  //
  return (
    <>
      <div className="mb-4">
        <h1 className="capitalize font-bold text-lg">password</h1>
        <div className="flex gap-x-5 items-start">
          <p className="text-sm tracking-wide">*********</p>
          <button
            className="text-xs text-primaryColor-light"
            onClick={handleEditPassword}
          >
            Edit
          </button>
        </div>
      </div>
      <form
        className={`border dark:border-gray-400 rounded-md px-3 pt-2 transition-all duration-300 ${
          isEditPasswordVisible
            ? "h-[49vh] opacity-100 mb-5"
            : "invisible h-0 opacity-0"
        }
        ${
          errors.confirm_password &&
          errors.current_password &&
          errors.new_password &&
          isEditPasswordVisible
            ? "h-[53vh]"
            : null
        }`}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="mb-4">
          <Input
            htmlFor="current_password"
            id="current_password"
            name="current_password"
            nameOfInput="current password"
            placeholder="current password"
            inputType="password"
            register={register}
            extraStyle={`${
              errors.current_password
                ? "border-b-2 border-red-600 focus:border-red-600"
                : "border-black"
            }`}
          />
          {errors.current_password && (
            <p className="text-right text-xs text-red-500">
              {errors?.current_password.message}
            </p>
          )}
        </div>
        {/*  */}
        <div className="mb-4">
          <Input
            htmlFor="new_password"
            id="new_password"
            name="new_password"
            nameOfInput="new password"
            placeholder="new password"
            inputType="password"
            register={register}
            extraStyle={`${
              errors.new_password
                ? "border-b-2 border-red-600 focus:border-red-600"
                : "border-black"
            }`}
          />
          {errors.new_password && (
            <p className="text-right text-xs text-red-500">
              {errors?.new_password.message}
            </p>
          )}
        </div>
        {/*  */}
        <div className="mb-4">
          <Input
            htmlFor="confirm_password"
            id="confirm_password"
            name="confirm_password"
            nameOfInput="confirm password"
            placeholder="confirm password"
            inputType="password"
            register={register}
            extraStyle={`${
              errors.confirm_password
                ? "border-b-2 border-red-600 focus:border-red-600"
                : "border-black"
            }`}
          />
          {errors.confirm_password && (
            <p className="text-right text-xs text-red-500">
              {errors?.confirm_password.message}
            </p>
          )}
        </div>
        <FormButton children="reset password" />
      </form>
    </>
  );
};
