import { Stack, Typography } from "@mui/material";
import { palette } from "theme/palette";
import { Link } from "react-router-dom";
import { LoginForm } from "features/auth";

export const Login = (): JSX.Element => (
  <Stack sx={{ height: "100%" }}>
    <Typography variant="h3" component="h3">
      Member’s area
    </Typography>
    <Typography variant="subtitle2" color={palette.grey[500]} sx={{ mb: "48px" }}>
      George Washington high school in Rosewood, Wisconsin, USA
    </Typography>

    <LoginForm />

    <Typography
      align="center"
      variant="subtitle2"
      color={palette.grey[600]}
      sx={{ mt: "auto", mb: "40px" }}>
      Not a member yet?{" "}
      <Typography variant="subtitle2" color={palette.red.main} component={Link} to="/registration">
        Register
      </Typography>
    </Typography>
  </Stack>
);
