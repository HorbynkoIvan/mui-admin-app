import { Button } from "common/components/buttons";
import { styled } from "@mui/material";

export const ButtonPrimary = styled(Button)(({ theme }) => ({
  height: "56px",
  color: theme.palette.primary.contrastText,
  borderRadius: "8px",
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create("backgroundColor", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "&:active, &:focus": {},
}));
