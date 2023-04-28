import { Box, Stack, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "theme";

export const SidebarProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Stack justifyContent="center" alignItems="center">
        <Box
          component="img"
          alt="profile-user"
          width="100px"
          height="100px"
          src={`static/images/logo/did.jpeg`}
          sx={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Stack>
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}>
          Did Ivan
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Super Admin
        </Typography>
      </Box>
    </Box>
  );
};
