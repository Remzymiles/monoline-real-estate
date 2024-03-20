import * as yup from "yup";

export const LoginFormValidator = yup.object({
  email_address: yup
    .string()
    .required("email address is required")
    .email("email format isn't supported")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must have atleast 6 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number"),
});
