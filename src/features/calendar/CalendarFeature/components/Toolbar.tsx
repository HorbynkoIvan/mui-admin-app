import { Typography, Box, Toolbar as ToolbarMui } from "@mui/material";
import { Button, ButtonAdd, Select } from "../../../../common";
import { navigate } from "../constants";

export const Toolbar = (props: any) => {
  console.log(props);
  return (
    <Box sx={{ mt: 4 }}>
      <ToolbarMui>
        <span>{props.label}</span>
        <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Prev</Button>
        <Button onClick={() => props.onNavigate(navigate.PREVIOUS)}>Next</Button>
        <Select />
        <ButtonAdd>
          <Typography variant="button" textTransform="initial">
            Add event
          </Typography>
        </ButtonAdd>
      </ToolbarMui>
    </Box>
  );
};
