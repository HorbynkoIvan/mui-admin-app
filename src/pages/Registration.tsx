import { Typography, Stack } from "@mui/material";
import { palette } from "theme/palette";
import { Link } from "react-router-dom";
import { RegistrationForm } from "features/auth";

export const Registration = (): JSX.Element => (
  <Stack sx={{ height: "100%" }}>
    <Typography variant="h3" component="h3">
      Welcome
    </Typography>
    <Typography variant="subtitle2" color={palette.grey[500]} sx={{ mb: "48px" }}>
      Sign up on the internal platform
    </Typography>

    <RegistrationForm />

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
