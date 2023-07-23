import * as yup from "yup";

export const phoneRegExp = /^(?:(\d{3}-\d{8})|(\d{11}))$/;

export const pwdRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@.$!%*#?&])[A-Za-z\d.@$!%*#?&]{6,12}$/;

export const checkoutSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup
    .string()
    .matches(
      pwdRegExp,
      "The password must consist minimum of 6 and maximum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character(@.$!%*#?&)"
    )
    .required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phoneNum: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});

export const initialValues = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
};
