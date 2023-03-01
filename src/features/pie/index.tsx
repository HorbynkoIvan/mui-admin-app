import { Box } from "@mui/material";
import { Header, PieChart } from "common/components";

export const Pie = () => (
  <Box m="20px">
    <Header title="Pie Chart" subtitle="Simple Pie Chart" />
    <Box height="75vh">
      <PieChart />
    </Box>
  </Box>
);
