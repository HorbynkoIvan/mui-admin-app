import { Box, useTheme } from "@mui/material";
import { Topbar, Sidebar } from "features";
import { Outlet } from "react-router-dom";
import { DRAWER_WIDTH } from "common/constants";
export const MainLayout = (): JSX.Element => {
  const { palette } = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          // width: `calc(100% - ${DRAWER_WIDTH}px)`,
          flexGrow: 1,
          // minHeight: "calc(100vh - 68px)",
          // backgroundColor: palette.primary.main,
          // mt: "68px",
          // px: 3,
          // pt: "12px",
          // pb: "25px",
        }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
};
