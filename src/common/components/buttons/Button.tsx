import { ElementType } from "react";
import { Button as ButtonMui, ButtonProps } from "@mui/material";

// const ButtonRoot = styled(ButtonMui)(({ theme, size, variant }) => ({
//   borderRadius: "8px",
//   boxShadow: "none",
//   "&:active, &:focus": {
//     boxShadow: "none",
//   },
//   ...(size === "small" && {
//     padding: theme.spacing(1, 3),
//     fontSize: theme.typography.pxToRem(13),
//   }),
//   ...(size === "large" && {
//     padding: theme.spacing(2, 5),
//     fontSize: theme.typography.pxToRem(16),
//   }),
//   ...(variant === "text" && {
//     backgroundColor: "yellow",
//   }),
// }));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
export const Button = <C extends ElementType>(props: ButtonProps<C, { component?: C }>) => (
  <ButtonMui {...props} />
);
