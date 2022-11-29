import { Box } from "@mui/material";
import { palette } from "theme/palette";
import { Header, Sidebar } from "features";
import { Outlet } from "react-router-dom";

export const MainLayout = (): JSX.Element => (
  <Box sx={{ display: "flex" }}>
    <Header />
    <Sidebar />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        backgroundColor: palette.primaryBg,
        pt: "68px",
        px: 3,
        pb: "25px",
        height: "100vh",
      }}>
      <Outlet />
    </Box>
  </Box>
);
