import * as React from "react";
import { Box, Link } from "@mui/material";
import { AppBar, Toolbar } from "common";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const drawerWidth = 240;

export const Header = (): JSX.Element => (
  <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box sx={{ flex: 1 }} />
      <Link variant="h6" underline="none" color="inherit" href="/test1" sx={{ fontSize: 24 }}>
        Test
      </Link>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Link color="inherit" variant="h6" underline="none" href="/sign-in" sx={rightLink}>
          Sign In
        </Link>
        <Link
          variant="h6"
          underline="none"
          href="/sign-up/"
          sx={{ ...rightLink, color: "secondary.main" }}>
          Sign Up
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);
