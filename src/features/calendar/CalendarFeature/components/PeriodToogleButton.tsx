import * as React from "react";
import { ToggleButton, ToggleButtonGroup, Typography, styled } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  overflow: "hidden",
  "& .MuiToggleButtonGroup-grouped": {
    color: theme.palette.primary.contrastText,
    height: "32px",
    backgroundColor: theme.palette.primary.main,
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {},
    "&:first-of-type": {},
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const data = [
  { id: 1, name: "Month" },
  { id: 2, name: "Week" },
  { id: 3, name: "Agenda" },
];
export const PeriodToggleButton = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform">
      {data.map(({ id, name }) => (
        <ToggleButton key={id} value="web">
          <Typography variant="button" textTransform="initial">
            {name}
          </Typography>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
