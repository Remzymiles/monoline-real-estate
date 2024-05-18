import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../../../base/interface/IUser";
import { FormButton } from "../../../Global/FormComponents/Button";
import { Input } from "../../../Global/FormComponents/Input";
import { WaveFormLoader } from "../../../Global/Loaders/WaveFormLoader";
import { signUpFormValidator } from "./signUpFormValidator";

export const SignUpForm = () => {
  //
  const [isSignUpButtonClicked, setIsSignUpButtonClicked] = useState(false);
  // 
  const redirect = useNavigate()
  //
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IUser>({
    resolver: yupResolver(signUpFormValidator),
  });
  //
  const handleCreateAccount: SubmitHandler<IUser> = (userData) => {
    setIsSignUpButtonClicked(true);

    setTimeout(() => {
      reset();
      redirect('/auth/login')
      console.log(userData);
      setIsSignUpButtonClicked(false)
    }, 2000);
  };

  return (
    <form
      className="px-6 pt-2 pb-2 mb-1 shadow-2xl mobile:shadow-none rounded-lg flex flex-col gap-5 dark:bg-secondaryColor-light/40 relative"
      noValidate
      onSubmit={handleSubmit(handleCreateAccount)}
    >
      {isSignUpButtonClicked && (
        <div className="absolute top-0 left-0 bg-black/50 z-50 w-[100%] h-[100%] flex justify-center items-center rounded-lg">
          <WaveFormLoader />
        </div>
      )}
      <div className="text-center text-2xl font-semibold text-secondaryColor-dark capitalize dark:text-gray-400">
        <h1>Create account</h1>
      </div>

      <div>
        <Input
          htmlFor="fullname"
          id="fullname"
          name="fullname"
          nameOfInput="full name"
          placeholder="fullname"
          inputType="text"
          register={register}
          extraStyle={`${
            errors.fullname
              ? "border-b-2 border-red-600 focus:border-red-600"
              : "border-black"
          }`}
        />
        {errors.fullname && (
          <p className="text-right text-sm text-red-500">
            {errors?.fullname.message}
          </p>
        )}
      </div>
      {/*  */}
      <div>
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
          <p className="text-right text-sm text-red-500">
            {errors?.email_address.message}
          </p>
        )}
      </div>
      {/*  */}
      <div>
        <Input
          htmlFor="password"
          id="password"
          name="password"
          nameOfInput="password"
          placeholder="password"
          inputType="password"
          register={register}
          extraStyle={`${
            errors.password
              ? "border-b-2 border-red-600 focus:border-red-600"
              : "border-black"
          }`}
        />
        {errors.password && (
          <p className="text-right text-sm text-red-500">
            {errors?.password.message}
          </p>
        )}
      </div>
      {/*  */}
      <div>
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
          <p className="text-right text-sm text-red-500">
            {errors?.confirm_password.message}
          </p>
        )}
      </div>
      {/*  */}
      <FormButton name="Sign up" />
      <p className="text-center text-secondaryColor-light dark:text-gray-400 text-sm">
        already have an account?{" "}
        <Link to={"/auth/login"} className="text-blue-600">
          Login
        </Link>
      </p>
    </form>
  );
};
