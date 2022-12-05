import { Typography, Stack } from "@mui/material";
import { palette } from "theme/palette";
import { Link } from "react-router-dom";
import { RegistrationForm } from "features/auth";
import { typography } from "../theme/typography";

export const Registration = (): JSX.Element => (
  <Stack sx={{ height: "100%" }}>
    <Typography variant="h6" component="h6" fontWeight={typography.fontWeightExtraBold}>
      Restore account
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
        Sign Up Now
      </Typography>
    </Typography>
  </Stack>
);
