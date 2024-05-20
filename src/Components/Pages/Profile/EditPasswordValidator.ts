import * as yup from "yup";

export const EditPasswordValidator = yup.object({
  current_password: yup
    .string()
    .required("password is required")
    .min(6, "password must have atleast 6 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number"),
  new_password: yup
    .string()
    .required("password is required")
    .min(6, "password must have atleast 6 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number"),
  confirm_password: yup
    .string()
    .required("confirm password")
    .oneOf([yup.ref("new_password")], "Passwords does not match"),
});
