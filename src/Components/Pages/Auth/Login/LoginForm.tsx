import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IUser } from "../../../../base/interface/IUser";
import supabase from "../../../../config/supabaseClient";
import { FormButton } from "../../../Global/FormComponents/Button";
import { Input } from "../../../Global/FormComponents/Input";
import { WaveFormLoader } from "../../../Global/Loaders/WaveFormLoader";
import { LoginFormValidator } from "./loginFormValidator";

type ILoginUser = Pick<IUser, "email_address" | "password">;

export const LoginForm = () => {
  //
  const redirect = useNavigate();
  //
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ILoginUser>({
    resolver: yupResolver(LoginFormValidator),
  });
  //
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ILoginUser) => {
      const response = await supabase.auth.signInWithPassword({
        email: data.email_address,
        password: data.password,
      });
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response;
    },
    onSuccess: () => {
      reset();
      redirect("/");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  const handleLogin: SubmitHandler<ILoginUser> = (data) => {
    mutate(data);
  };

  return (
    <form
      className="px-6 pt-5 pb-2 mb-1 shadow-2xl mobile:shadow-none rounded-lg flex flex-col gap-5 dark:bg-secondaryColor-light/40 big-screen-mobile-below:dark:bg-secondaryColor-light/0"
      noValidate
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="text-center text-2xl font-semibold text-secondaryColor-dark capitalize dark:text-gray-400">
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
          disabled={isPending}
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
          disabled={isPending}
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
      <FormButton children={isPending ? <WaveFormLoader /> : "Login"} />
      {/*  */}
      <p className="text-center text-secondaryColor-light text-sm dark:text-gray-400">
        don't have an account?{" "}
        <Link to={"/auth/sign-up"} className="text-blue-600">
          Sign up
        </Link>
      </p>
    </form>
  );
};
