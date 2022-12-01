import * as React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export const Login = (): JSX.Element => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}>
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "neutral.50",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}>
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}>
            <Box
              sx={{
                maxWidth: 500,
                px: 3,
                py: "100px",
                width: "100%",
              }}>
              <div>
                <Typography sx={{ mb: 1 }} variant="h4">
                  Confirm your email
                </Typography>
                <Typography>
                  We emailed a magic link to&nbsp;
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                    }}></Box>
                  <br />
                  Click the link to to log in.
                </Typography>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    gap: 3,
                    mt: 3,
                  }}>
                  <Typography color="text.secondary" variant="body2">
                    Wrong email?
                  </Typography>
                  <Button color="inherit">Use a different email</Button>
                </Box>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}>
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
              }}
              variant="h1">
              Authentication sponsored by&nbsp;
              <Box
                component="a"
                href="https://zalter.com?ref=devias-mk-react"
                sx={{ color: "#15B79E" }}
                target="_blank">
                zalter.com
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
              Create secure, seamless user experiences with Zalter Passwordless Authentication.
            </Typography>
            <img alt="" src="/static/images/sign-in-illustration.svg" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
