import { Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginForm } from "features/auth";
import { typography } from "../theme/typography";

export const Login = (): JSX.Element => {
  const { palette } = useTheme();

  return (
    <Stack sx={{ height: "100%" }}>
      <Typography variant="h6" component="h6" fontWeight={typography.fontWeightExtraBold}>
        Welcome
      </Typography>
      <Typography variant="subtitle2" color={palette.grey[500]} sx={{ mb: "48px" }}>
        Sign in on the internal platform
      </Typography>

      <LoginForm />

      <Typography
        align="center"
        variant="subtitle2"
        color={palette.grey[600]}
        sx={{ mt: "auto", mb: "40px" }}>
        Not a member yet?{" "}
        <Typography
          variant="subtitle2"
          color={palette.secondary.main}
          component={Link}
          to="/registration">
          Register
        </Typography>
      </Typography>
    </Stack>
  );
};
