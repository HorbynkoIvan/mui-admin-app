import { Box } from "@mui/material";
import { Topbar, Sidebar } from "common/components";
import { Outlet } from "react-router-dom";

export const MainLayout = (): JSX.Element => (
  <Box sx={{ display: "flex" }}>
    <Sidebar />
    <Box
      component="main"
      sx={{
        width: "100%",
        height: "100%",
      }}>
      <Topbar />
      <Outlet />
    </Box>
  </Box>
);
