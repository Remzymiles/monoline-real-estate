import { Link } from "react-router-dom";
import { FormButton } from "../../../Global/FormComponents/Button";
import { Input } from "../../../Global/FormComponents/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "../../../../base/interface/IUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidator } from "./signUpFormValidator";

export const SignUpForm = () => {
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
    reset();
    console.log(userData);
  };

  return (
    <form
      className="px-6 pt-5 pb-2 mb-1 shadow-2xl mobile:shadow-none rounded-lg flex flex-col gap-5"
      noValidate
      onSubmit={handleSubmit(handleCreateAccount)}
    >
      <div className="text-center text-2xl font-semibold text-secondaryColor-dark capitalize">
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
          <p className="text-right mt-1 text-sm text-red-500">
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
          <p className="text-right mt-1 text-sm text-red-500">
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
          <p className="text-right mt-1 text-sm text-red-500">
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
          <p className="text-right mt-1 text-sm text-red-500">
            {errors?.confirm_password.message}
          </p>
        )}
      </div>
      {/*  */}
      <FormButton name="Sign up" />
      <p className="text-center text-secondaryColor-light">
        already have an account?{" "}
        <Link to={"/auth/login"} className="text-blue-900">
          Login
        </Link>
      </p>
    </form>
  );
};
