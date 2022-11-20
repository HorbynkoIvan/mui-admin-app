import React, { ReactNode } from "react";
import { Button as ButtonMui } from "@mui/material";

interface Props {
  title?: string;
  icon?: ReactNode;
}

export const Button: React.FunctionComponent<Props> = ({ title, icon }: Props) => {
  return (
    <ButtonMui disableRipple={true} onClick={() => console.log("onClick")} variant="text">
      {icon}
      {title}
    </ButtonMui>
  );
};
