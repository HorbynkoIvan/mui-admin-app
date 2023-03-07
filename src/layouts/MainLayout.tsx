import { Box } from "@mui/material";
import { TopBar, Sidebar } from "features";
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
      <TopBar />
      <Outlet />
    </Box>
  </Box>
);
