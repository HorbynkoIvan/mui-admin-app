import { ReactNode } from "react";
import { Box } from "@mui/material";

interface TabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}
export const TabPanel = ({ index, value, children }: TabPanelProps) => {
  if (value !== index) return null;

  return (
    <Box px={1} py={3}>
      {children}
    </Box>
  );
};
