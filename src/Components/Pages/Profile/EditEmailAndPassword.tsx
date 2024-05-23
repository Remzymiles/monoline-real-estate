import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHandleEditEmailAndPassword } from "../../../base/hooks/useHandleEditEmailAndPassword";
import { getAuthData } from "../../../base/utlils/getAuthData";
import { FormButton } from "../../Global/FormComponents/Button";
import { Input } from "../../Global/FormComponents/Input";
import { EditEmailFormValidator } from "./EditEmailFormValidator";
import { EditPasswordForm } from "./EditPasswordForm";

interface IEditEmailForm {
  email_address: string;
  password: string;
}

export const EditEmailAndPassword = () => {
  //

  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data?.user?.email) {
        setUserEmail(data.user.email);
      }
    };

    fetchData();
  }, []);

  const {
    handleEditEmail,
    isEditEmailVisible,
    handleEditPassword,
    isEditPasswordVisible,
  } = useHandleEditEmailAndPassword();
  //
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IEditEmailForm>({
    resolver: yupResolver(EditEmailFormValidator),
  });
  //
  const handleSubmitForm = () => {
    reset();
  };
  //
  return (
    <div>
      <div className="mb-3">
        <h1 className="capitalize font-bold text-lg">email</h1>
        <div className="flex gap-x-5 items-end">
          <p className="text-sm tracking-wide">{userEmail}</p>
          <button
            className="text-xs text-primaryColor-light"
            onClick={handleEditEmail}
          >
            Edit
          </button>
        </div>
      </div>
      <form
        className={`border dark:border-gray-400 rounded-md px-3 py-2 bg-white dark:bg-secondaryColor-dark/10 transition-all duration-300 ${
          isEditEmailVisible
            ? "h-[34vh] opacity-100 mb-5"
            : "invisible h-0 opacity-0"
        } ${
          errors.email_address && errors.password && isEditEmailVisible
            ? "h-[42vh]"
            : null
        }`}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="mb-2">
          <Input
            htmlFor="email_address"
            id="email_address"
            name="email_address"
            nameOfInput="email address"
            placeholder="email address"
            inputType="text"
            register={register}
            extraStyle={`${
              errors.email_address
                ? "border-b-2 border-red-600 focus:border-red-600"
                : "border-black"
            }`}
          />
          {errors.email_address && (
            <p className="text-right text-xs text-red-500">
              {errors?.email_address.message}
            </p>
          )}
        </div>
        {/*  */}
        <div className="mb-2">
          <Input
            htmlFor="password"
            id="password"
            name="password"
            nameOfInput="current password"
            placeholder="current password"
            inputType="password"
            register={register}
            extraStyle={`${
              errors.password
                ? "border-b-2 border-red-600 focus:border-red-600"
                : "border-black"
            }`}
          />
          {errors.password && (
            <p className="text-right text-xs text-red-500">
              {errors?.password.message}
            </p>
          )}
        </div>
        <FormButton children="change email" />
      </form>

      {/*  */}

      <EditPasswordForm
        handleEditPassword={handleEditPassword}
        isEditPasswordVisible={isEditPasswordVisible}
      />
    </div>
  );
};
