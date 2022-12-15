import { PHONE_CODES } from "common/constants";

const checkValidPhoneCode = (phoneValue: string) => {
  const currentPhoneCode = phoneValue.replace(/[^0-9]/g, "").slice(2, 5);

  return PHONE_CODES.includes(currentPhoneCode);
};

export const usePhoneValidation = (phoneValue: string): boolean => {
  const validPhone = !!phoneValue && phoneValue.replace(/[^0-9]/g, "").length === 12;

  return checkValidPhoneCode(phoneValue) && validPhone;
};
