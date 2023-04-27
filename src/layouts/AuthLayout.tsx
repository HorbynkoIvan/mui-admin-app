import { Outlet } from "react-router-dom";
import { Grid, Box, CardMedia, Stack } from "@mui/material";

export const AuthLayout = () => (
  <Box component="main">
    <Grid container sx={{ flex: "1 1 auto", height: "100vh" }}>
      <Grid item xs={12} lg={7}>
        <CardMedia
          height="100%"
          component="img"
          image="/static/images/showcase/showcase.jpg"
          alt="showcase"
        />
      </Grid>
      <Grid item xs={12} lg={5}>
        <Stack
          sx={{
            maxWidth: "308px",
            height: "100%",
            margin: "0 auto",
          }}>
          <CardMedia
            component="img"
            image="/static/logo.svg"
            alt="logo"
            sx={{ maxWidth: "112px", height: "auto" }}
          />
          <Box height="100%" mt={130}>
            <Outlet />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);
