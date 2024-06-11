import * as yup from "yup";

export const EditProfileFormValidator = yup.object({
  fullName: yup.string().required("full name is required"),
  mobile_number: yup
    .string()
    .required("mobile number is required")
    .min(11, "mobile number must have 11 characters"),
  location: yup.string().required("Location is required"),
});
