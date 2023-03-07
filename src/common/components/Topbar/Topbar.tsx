import { Stack, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";
import { ColorModeContext, tokens } from "theme";

export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Stack direction="row" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Stack direction="row" alignItems="center" bgcolor={colors.primary[400]} borderRadius={1}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Stack>

      {/* ICONS */}
      <Stack direction="row">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Stack>
    </Stack>
  );
};
