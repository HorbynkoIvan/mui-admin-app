import { Select as SelectMui, SelectProps, styled, InputBase as InputBaseMui } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

const InputBase = styled(InputBaseMui)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    width: "100%",
  },
}));

export const SelectSecondary = styled((props: SelectProps) => (
  <SelectMui {...props} input={<InputBase />} IconComponent={MdExpandMore} />
))(({ theme }) => ({
  height: "44px",
  border: `1px solid ${theme.palette.grey[200]}`,
  color: `${theme.palette.grey[800]}`,
  borderRadius: "8px",
  background: "#ffffff",
  "& .MuiSelect-icon": {
    fontSize: "16px",
    color: `${theme.palette.grey[800]}`,
  },
  ".MuiPaper-roo": {
    backgroundColor: "#000000",
  },
}));
