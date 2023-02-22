import { Typography, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { RegistrationForm } from "features/auth";
import { typography } from "../theme/typography";

export const Registration = (): JSX.Element => {
  const { palette } = useTheme();

  return (
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
        <Typography variant="subtitle2" color={palette.secondary.main} component={Link} to="/login">
          Sign Up Now
        </Typography>
      </Typography>
    </Stack>
  );
};
