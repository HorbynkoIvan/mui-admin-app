import { alpha, styled } from "@mui/material/styles";
import { TextField as TextFieldMui, TextFieldProps, Typography } from "@mui/material";

const TextFieldRoot = styled(TextFieldMui)(({ theme }) => ({
  "& .MuiInputBase-input": {
    background: "#E9ECEE",
    borderRadius: "5px",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
  },
}));
export const TextFieldOne = ({ label, ...props }: TextFieldProps) => (
  <>
    <Typography variant="h6">{label}</Typography>
    <TextFieldRoot {...props} />
  </>
);
