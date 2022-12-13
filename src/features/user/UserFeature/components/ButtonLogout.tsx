import { Button, ButtonProps, styled } from "@mui/material";

export const ButtonLogout = styled((props: ButtonProps) => <Button disableRipple {...props} />)(
  () => ({
    color: "#FF3801",
    fontWeight: 400,
    minWidth: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);
