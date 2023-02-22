import {
  Avatar,
  Box,
  Stack,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useUserMenu } from "../hooks";
import { typography } from "theme";

type Props = {
  username: string | undefined;
};

export const Profile = ({ username }: Props) => {
  const { palette } = useTheme();
  const { settings, anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = useUserMenu();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Jack Sparrow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREl
                      hrrukbGAM2szhqV3C9JDuQcD2eGkQgCA_ymptNwVYAUgbaayPfuP4qYHp-nXecNAk0&usqp=CAU"
          />
        </IconButton>
      </Tooltip>

      <Box sx={{ ml: 4 }}>
        <Typography
          variant="subtitle2"
          lineHeight="18px"
          fontWeight={typography.fontWeightBold}
          noWrap>
          {username}
        </Typography>
        <Typography variant="subtitle2" color={palette.grey[800]} lineHeight="18px" noWrap>
          Super-admin
        </Typography>
      </Box>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};
