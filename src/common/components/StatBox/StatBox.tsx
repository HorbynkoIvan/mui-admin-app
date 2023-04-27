import { ReactNode } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "theme";
import { ProgressCircle } from "common/components";

type Props = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: string;
  increase: string;
};

export const StatBox: React.FC<Props> = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Stack direction="row" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </Stack>

      <Stack direction="row" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
          {increase}
        </Typography>
      </Stack>
    </Box>
  );
};
