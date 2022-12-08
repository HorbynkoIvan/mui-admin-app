import { Button } from "common/components/buttons";
import { styled, ButtonProps } from "@mui/material";
import { MdAdd } from "react-icons/md";

const ButtonRoot = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: "6px 16px 6px 6px",
  borderRadius: "8px",
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create("backgroundColor", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  "& .MuiButton-startIcon": {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    marginLeft: 0,
    svg: {
      fill: theme.palette.primary.main,
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "&:active, &:focus": {},
}));

export const ButtonAdd = (props: ButtonProps) => <ButtonRoot {...props} startIcon={<MdAdd />} />;
