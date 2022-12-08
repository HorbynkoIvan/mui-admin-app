import { ElementType } from "react";
import { Button as ButtonMui, ButtonProps } from "@mui/material";

export const Button = <C extends ElementType>(props: ButtonProps<C, { component?: C }>) => (
  <ButtonMui {...props} />
);
