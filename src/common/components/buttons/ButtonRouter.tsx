import { ComponentProps } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ButtonRouter = ({
  ...props
}: ComponentProps<typeof Button> & ComponentProps<typeof Link>) => (
  <Button {...props} component={Link} />
);
