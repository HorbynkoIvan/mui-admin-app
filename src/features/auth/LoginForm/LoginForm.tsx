import { Typography, Stack, TextField, InputAdornment, IconButton, useTheme } from "@mui/material";
import { Checkbox } from "common/ui";
import { MdAccountCircle, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../common/ui/buttons/ButtonPrimary";

const mock = { showPassword: true, checked: true };

export const LoginForm = (): JSX.Element => {
  const { palette } = useTheme();

  return (
    <form>
      <Stack spacing={4}>
        <TextField
          variant="outlined"
          placeholder="Login/E-mail"
          sx={{ borderRadius: "8px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdAccountCircle fontSize={20} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          variant="outlined"
          placeholder="Password"
          sx={{ borderRadius: "8px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdLock fontSize={20} />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => console.log("handleClickShowPassword")}
                onMouseDown={() => console.log("handleMouseDownPassword")}
                edge="end">
                {mock.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            ),
          }}
        />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Checkbox
            name="rememberMe"
            label="Remember me"
            componentsProps={{ typography: { variant: "subtitle2", color: palette.grey[500] } }}
            onChange={() => console.log("handleChange")}
            checked={mock.checked}
          />
          <Typography
            variant="subtitle2"
            color={palette.grey[500]}
            component={Link}
            to="/forgot-password">
            Forgot password?
          </Typography>
        </Stack>

        <ButtonPrimary component={Link} to="/">
          authentication
        </ButtonPrimary>
      </Stack>
    </form>
  );
};
