import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";

import {
  MdAccountCircle,
  MdOutlineAccountCircle,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../common/ui/buttons/ButtonPrimary";

const mock = { showPassword: true, checked: true };

export const RegistrationForm = (): JSX.Element => (
  <form>
    <Stack spacing={4}>
      <TextField
        variant="outlined"
        placeholder="First Name"
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
        placeholder="Last Name"
        sx={{ borderRadius: "8px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdOutlineAccountCircle fontSize={20} />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        variant="outlined"
        placeholder="Enter your e-mail"
        sx={{ borderRadius: "8px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MdEmail fontSize={20} />
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

      <ButtonPrimary component={Link} to="/">
        Restore account
      </ButtonPrimary>
    </Stack>
  </form>
);
