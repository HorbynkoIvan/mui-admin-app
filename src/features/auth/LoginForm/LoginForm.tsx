import { Typography, Stack, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { palette } from "theme/palette";
import { Checkbox } from "common/components";
import { MdAccountCircle, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";

const mock = { showPassword: true, checked: true };

export const LoginForm = (): JSX.Element => (
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
