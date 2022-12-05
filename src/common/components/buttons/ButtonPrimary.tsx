import { Button } from "../buttons";
import { styled } from "@mui/material/styles";

export const ButtonPrimary = styled(Button)(({ theme }) => ({
  width: "308px",
  height: "56px",
  color: theme.palette.primary.contrastText,
  padding: 0,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "8px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary.light,
  },
  "&:active, &:focus": {},
}));
