import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "theme";
import { MenuOutlined } from "@mui/icons-material";

type Props = {
  isCollapsed: boolean;
  handleCollapsed: () => void;
};

export const SidebarCollapseItem = ({ isCollapsed, handleCollapsed }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      onClick={handleCollapsed}
      icon={isCollapsed ? <MenuOutlined /> : undefined}
      style={{
        margin: "10px 0 20px 0",
        color: colors.grey[100],
      }}>
      {!isCollapsed && (
        <Stack direction="row" justifyContent="space-between" alignItems="center" ml="15px">
          <Typography variant="h3" color={colors.grey[100]}>
            ADMINS
          </Typography>
          <IconButton onClick={handleCollapsed}>
            <MenuOutlined />
          </IconButton>
        </Stack>
      )}
    </MenuItem>
  );
};
