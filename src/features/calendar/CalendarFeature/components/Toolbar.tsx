import { Box } from "@mui/material";
import { Button } from "../../../../common";
import { navigate } from "../constants";

export const Toolbar = (props: any) => {
  console.log(props);
  return (
    <Box sx={{ mt: 4 }}>
      <span>{props.label}</span>
      <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Prev</Button>
      <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Next</Button>
    </Box>
  );
};
