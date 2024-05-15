import * as yup from "yup";

export const DebitCardFormValidator = yup.object({
  card_number: yup
    .string()
    .required("Please fill in your card number")
    .min(19, "card number must be 16 characters"),
  cardHolder_name: yup
    .string()
    .required("this field name is required")
    .min(6),
  exp_date: yup
    .string()
    .required("Please provide card expiry date"),
  cvv: yup
    .string()
    .length(3, "must be exactly 3 digits")
    .required("this field is required")
});
