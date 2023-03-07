import { Box } from "@mui/material";
import { Header, LineChart } from "common/ui";

export const Line = () => (
  <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <LineChart />
    </Box>
  </Box>
);
