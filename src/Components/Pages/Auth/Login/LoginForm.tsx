import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormComponents/Input";
import { IUser } from "../../../../base/interface/IUser";
import { FormButton } from "../../../Global/FormComponents/Button";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValidator } from "./loginFormValidator";

export const LoginForm = () => {
  //
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Pick<IUser, "email_address" | "password">>({
    resolver: yupResolver(LoginFormValidator),
  });
  //
  const handleLogin: SubmitHandler<
    Pick<IUser, "email_address" | "password">
  > = (userData) => {
    reset();
  };

  return (
    <form
      className="px-6 pb-2 mb-1 shadow-2xl mobile:shadow-none rounded-lg flex flex-col gap-5"
      noValidate
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="text-center text-2xl font-semibold text-secondaryColor-dark capitalize">
        <h1>Login</h1>
      </div>

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
      <FormButton name="Login" />
      {/*  */}
      <p className="text-center text-secondaryColor-light">
        don't have an account?{" "}
        <Link to={"/auth/sign-up"} className="text-blue-900">
          Sign up
        </Link>
      </p>
    </form>
  );
};
