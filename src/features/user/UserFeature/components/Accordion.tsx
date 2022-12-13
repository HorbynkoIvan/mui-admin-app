import { Accordion as AccordionMui, AccordionProps, styled } from "@mui/material";

export const Accordion = styled((props: AccordionProps) => (
  <AccordionMui disableGutters elevation={0} square {...props} />
))(() => ({
  background: "#F4F6F8",
  borderRadius: 0,
  border: "1px solid #CCCCCC",
  "&.Mui-expanded": {},
  "&:not(:last-of-type)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&:after": {
    display: "none",
  },
}));
