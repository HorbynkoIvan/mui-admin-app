import { AppBar, Stack, Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Account } from "./Account";
// import { DRAWER_WIDTH } from "../../common";

export const HeaderFeature = (): JSX.Element => (
  <AppBar
    component="nav"
    color="inherit"
    elevation={0}
    sx={{
      // width: `calc(100% - ${DRAWER_WIDTH}px)`, ml: `${DRAWER_WIDTH}px`,
      width: "100%",
      height: 65,
      boxShadow: "0px 6px 8px rgba(94, 129, 170, 0.08)",
      mb: 2,
    }}>
    <Toolbar sx={{ px: 10 }} disableGutters>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width={"100%"}>
        <Logo src="/static/images/logo/school_logo.svg" />
        <Account />
      </Stack>
    </Toolbar>
  </AppBar>
);
