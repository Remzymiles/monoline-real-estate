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
import { signUpFormValidator } from "./signUpFormValidator";

export const SignUpForm = () => {
  //
  const redirect = useNavigate();
  //
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IUser>({
    resolver: yupResolver(signUpFormValidator),
  });
  //
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IUser) => {
      const response = await supabase.auth.signUp({
        email: data.email_address,
        password: data.password,
        options: { data: { fullname: data.fullname } },
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
  // 
  const handleCreateAccount: SubmitHandler<IUser> = (data) => {
    mutate(data);
    //
  };
  //
  return (
    <form
      className="px-6 pt-2 pb-2 mb-1 shadow-2xl mobile:shadow-none rounded-lg flex flex-col gap-5 dark:bg-secondaryColor-light/40 big-screen-mobile-below:dark:bg-secondaryColor-light/0"
      noValidate
      onSubmit={handleSubmit(handleCreateAccount)}
    >
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
      <FormButton type="submit">
        {isPending ? <WaveFormLoader /> : "sign up"}
      </FormButton>
      <p className="text-center text-secondaryColor-light dark:text-gray-400 text-sm">
        already have an account?{" "}
        <Link to={"/auth/login"} className="text-blue-600">
          Login
        </Link>
      </p>
    </form>
  );
};
