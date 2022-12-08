import { EventWrapperProps } from "react-big-calendar";
import { Box } from "@mui/material";

export const EventWrapper = (props: EventWrapperProps<any>) => {
  console.log(props);
  // const { continuesEarlier, event, label, accessors = {}, style } = props;
  return <Box sx={{ width: "24px", height: "24px", backgroundColor: "#000fff" }}>event</Box>;
};
