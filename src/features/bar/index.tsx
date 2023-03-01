import { Box } from "@mui/material";
import { Header, BarChart } from "common/components";

export const Bar = () => (
  <Box m="20px">
    <Header title="Bar Chart" subtitle="Simple Bar Chart" />
    <Box height="75vh">
      <BarChart />
    </Box>
  </Box>
);
