import { Typography, Box, Button } from "@mui/material";

export const SidebarFooter = (): JSX.Element => (
  <Box sx={{ mt: "auto" }} alignContent={"center"}>
    <Button variant="outlined">Log out</Button>
    <Typography align="center" sx={{ my: 2 }}>
      Confidential policy
    </Typography>
  </Box>
);
