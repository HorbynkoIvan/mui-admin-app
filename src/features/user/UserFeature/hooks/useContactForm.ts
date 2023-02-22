import { useFormik } from "formik";
import * as yup from "yup";

import { usePhoneValidation } from "common/hooks";
import { REG_EXP_CYRILLIC_WITH_DASH } from "common/constants";
import { MyFormValues } from "../interfaces";

const defaultValues: MyFormValues = {
  firstName: "",
  lastName: "",
  birthDay: null,
  phoneMobile: "",
  email: "",
  checkbox: true,
  oldPassword: "",
  newPassword: "",
  newPlainPassword: "",
};

export const useContactForm = (dataAPI: any) => {
  const form = useFormik({
    initialValues: { ...defaultValues, ...dataAPI },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required("Заполните поле")
        .matches(REG_EXP_CYRILLIC_WITH_DASH, "Заполните поле кириллицей"),
      lastName: yup
        .string()
        .required("Заполните поле")
        .matches(REG_EXP_CYRILLIC_WITH_DASH, "Заполните поле кириллицей"),
      birthDay: yup.date().nullable().required("Заполните поле"),
      phoneMobile: yup
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
      checkbox: yup.boolean().oneOf([true], "This field must be checked"),
      oldPassword: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field"),
      newPassword: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field"),
      newPlainPassword: yup
        .string()
        .min(8, "Minimum 8 characters")
        .max(50, "Maximum 50 characters")
        .required("Required field")
        .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("onSubmit", JSON.stringify(values, null, 2));
    },
  });

  return form;
};
