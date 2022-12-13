import { useMediaQuery } from "@mui/material";

import { AccordionBlock, Tabs } from "./components";

export const UserFeature = () => {
  const mobile = useMediaQuery("(max-width: 767px)");

  return <>{!mobile ? <Tabs /> : <AccordionBlock />}</>;
};
