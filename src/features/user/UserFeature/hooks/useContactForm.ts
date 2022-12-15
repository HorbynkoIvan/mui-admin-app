import { useFormik } from "formik";
import * as yup from "yup";

import { usePhoneValidation } from "common/hooks";
import { REG_EXP_CYRILLIC_WITH_DASH, REG_EXP_NUMBER_CYRILLIC } from "common/constants";

export const useContactForm = () => {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      email: "",
      checkbox: true,
      password: "",
      password2: "",
      confirmPassword: "",
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("Заполните поле")
        .matches(REG_EXP_CYRILLIC_WITH_DASH, "Заполните поле кириллицей"),
      lastName: yup
        .string()
        .required("Заполните поле")
        .matches(REG_EXP_CYRILLIC_WITH_DASH, "Заполните поле кириллицей"),
      date: yup
        .string()
        .required("Заполните поле")
        .matches(REG_EXP_CYRILLIC_WITH_DASH, "Заполните поле кириллицей"),
      phone: yup
        .string()
        .required("Заполните поле")
        .test(
          "phone-validation",
          "Введите правильный телефон",
          function (value: string | undefined) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return value ? usePhoneValidation(value) : false;
          }
        ),
      email: yup.string().email("Invalid email format").required("Required field"),
      checkbox: yup.bool(),
      password: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field"),
      password2: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field"),
      confirmPassword: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("onSubmit", JSON.stringify(values, null, 2));
    },
  });

  return form;
};
