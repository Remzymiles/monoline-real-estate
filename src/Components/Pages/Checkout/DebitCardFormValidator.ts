import * as yup from "yup";

export const DebitCardFormValidator = yup.object({
  card_number: yup
    .string()
    .required("card number is required")
    .matches(/^\d{1,16}$/),
  cardHolder_name: yup
    .string()
    .required("card holder's name is required")
    .min(6),
  exp_date: yup
    .string()
    .required("Card expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date format (MM/YY)"),
  cvv: yup
    .string()
    .length(3, "must be exactly 3 digits")
    .required("cvv is required")
    .matches(/^\d{3}$/, "Card number must be exactly 3 digits"),
});
