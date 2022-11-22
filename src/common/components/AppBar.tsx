import * as React from "react";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";

export const AppBar = (props: AppBarProps): JSX.Element => {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
};
