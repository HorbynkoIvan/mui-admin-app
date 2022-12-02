import { Typography, Stack } from "@mui/material";
import { palette } from "theme/palette";
import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "features/auth";

export const ForgotPassword = (): JSX.Element => (
  <Stack sx={{ height: "100%" }}>
    <Typography variant="h3" component="h3">
      Member’s area
    </Typography>
    <Typography variant="subtitle2" color={palette.grey[500]} sx={{ mb: "48px" }}>
      George Washington high school in Rosewood, Wisconsin, USA
    </Typography>

    <ForgotPasswordForm />

    <Typography
      align="center"
      variant="subtitle2"
      color={palette.grey[600]}
      sx={{ mt: "auto", mb: "40px" }}>
      Already registered?{" "}
      <Typography variant="subtitle2" color={palette.red.main} component={Link} to="/login">
        Log in
      </Typography>
    </Typography>
  </Stack>
);
