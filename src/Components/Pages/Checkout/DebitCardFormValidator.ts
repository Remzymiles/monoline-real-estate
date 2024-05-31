import * as yup from "yup";

export const DebitCardFormValidator = yup.object({
  card_number: yup
    .string()
    .min(16, "card number must be 16 characters")
    .max(19,"m")
    .required("Please fill in your card number"),
  cardHolder_name: yup
    .string()
    .required("this field name is required")
    .min(6),
  exp_date: yup
    .string()
    .required("Please provide card expiry date"),
  cvv: yup
    .string()
    .length(3, "3 digits only")
    .required("this field is required")
});
