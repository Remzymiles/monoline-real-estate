import * as yup from "yup";

export const EditProfileFormValidator = yup.object({
  fullname: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .length(11, "Phone number must have 11 characters"),
  location: yup.string().required("Location is required"),
});
