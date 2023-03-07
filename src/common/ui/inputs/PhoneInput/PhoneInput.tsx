import { PatternFormat, PatternFormatProps } from "react-number-format";
import { TextFieldProps } from "@mui/material";

type Props = Omit<PatternFormatProps<TextFieldProps>, "format">;

export const PhoneInput = (props: Props) => (
  <PatternFormat {...props} type="tel" allowEmptyFormatting mask="_" format="+38 (0##) ### ## ##" />
);
