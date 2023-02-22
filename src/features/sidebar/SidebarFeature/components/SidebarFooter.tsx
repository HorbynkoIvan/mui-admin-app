import { Typography, Box, useTheme } from "@mui/material";
import { ButtonOutlined } from "common/components/buttons";
import { Link } from "react-router-dom";

export const SidebarFooter = (): JSX.Element => {
  const { palette } = useTheme();

  return (
    <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ButtonOutlined disableRipple component={Link} to="/login">
        <Typography variant="button" color={palette.grey[600]} textTransform="initial">
          Log out
        </Typography>
      </ButtonOutlined>
      <Typography sx={{ my: 2 }} align="center">
        Confidential policy
      </Typography>
    </Box>
  );
};
