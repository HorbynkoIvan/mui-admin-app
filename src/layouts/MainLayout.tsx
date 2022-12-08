import { Box } from "@mui/material";
import { palette } from "theme/palette";
import { Header, Sidebar } from "features";
import { Outlet } from "react-router-dom";
import { DRAWER_WIDTH } from "common/constants";
export const MainLayout = (): JSX.Element => (
  <Box sx={{ display: "flex" }}>
    <Header />
    <Sidebar />
    <Box
      component="main"
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        flexGrow: 1,
        minHeight: "calc(100vh - 68px)",
        backgroundColor: palette.bodyBackground.main,
        mt: "68px",
        px: 3,
        pt: "12px",
        pb: "25px",
      }}>
      <Outlet />
    </Box>
  </Box>
);
