import { Divider, MenuItem } from "@mui/material";
import { AccordionOne, TabsOne, SelectPrimary, SelectSecondary } from "common";

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard page</h1>
      <AccordionOne />
      <TabsOne />
      <Divider />
      <SelectPrimary
        label="Default Admin Role"
        defaultValue="Day"
        options={["Day", "Week", "Month"]}
      />
      <Divider />
      <SelectSecondary>
        {["Day", "Week", "Month"].map((option) => (
          <MenuItem key={option} value={option} disableRipple>
            {option}
          </MenuItem>
        ))}
      </SelectSecondary>
    </>
  );
};
