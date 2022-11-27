import { Typography, Box } from "@mui/material";
import { ButtonOutlined } from "common/components/buttons";
import { palette } from "../../../theme/palette";

export const SidebarFooter = (): JSX.Element => (
  <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <ButtonOutlined disableRipple>
      <Typography variant="button" color={palette.grey[600]} textTransform="initial">
        Log out
      </Typography>
    </ButtonOutlined>
    <Typography sx={{ my: 2 }} align="center">
      Confidential policy
    </Typography>
  </Box>
);
