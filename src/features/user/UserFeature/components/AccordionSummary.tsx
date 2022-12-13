import {
  AccordionSummary as AccordionSummaryMui,
  AccordionSummaryProps,
  styled,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummaryMui expandIcon={<MdExpandMore />} {...props} />
))(() => ({
  height: "50px",
  backgroundColor: "#F4F6F8",
  "&.Mui-expanded": {
    marginBottom: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    padding: "0 16px",
  },
}));
