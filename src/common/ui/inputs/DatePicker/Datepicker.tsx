import { TextFieldProps } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider, DatePickerProps } from "@mui/x-date-pickers";

type Props = DatePickerProps<any, any> & TextFieldProps;
export const Datepicker = (props: Props) => (
  <LocalizationProvider
    dateAdapter={AdapterDateFns}
    // adapterLocale={"ru"}
  >
    <DatePicker disabled={false} disablePast {...props} />
  </LocalizationProvider>
);
