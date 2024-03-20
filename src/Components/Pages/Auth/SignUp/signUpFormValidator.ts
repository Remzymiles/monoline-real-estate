import * as yup from "yup";

export const signUpFormValidator = yup.object({
  fullname: yup
    .string()
    .required("fullname is required")
    .min(6, "fullname must have atleast 6 characters"),
  email_address: yup
    .string()
    .required("email address is required")
    .email("email format isn't supported")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email format"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must have atleast 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  confirm_password: yup
    .string()
    .required("confirm password")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
