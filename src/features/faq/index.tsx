import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Header } from "common/components";
import { tokens } from "theme";
import { FAQData } from "data/mockFAQData";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={5}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {FAQData.map(({ title, content }) => (
        <Accordion defaultExpanded key={title}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
