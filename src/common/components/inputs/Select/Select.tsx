import { useState } from "react";
import {
  Select as SelectMui,
  SelectChangeEvent,
  Checkbox,
  ListItemText,
  FormControl,
  MenuItem,
  styled,
  OutlinedInput,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

const OutlinedInputRoot = styled(OutlinedInput)(({ theme }) => ({
  height: 32,
  fontSize: 16,
  fontWeight: 400,
  borderColor: theme.palette.grey[200],
  // borderColor: "#d32f2f",
  borderRadius: "4px",
  input: {
    // borderColor: "#d32f2f",
    // outlined: "#d32f2f",
  },
  "&:hover": {
    // borderColor: "red",
    // borderColor: theme.palette.grey[400],
  },
  "&:active, &:focus": {},
}));

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 144,
    },
  },
};

const periodsList: string[] = ["Day", "Week", "Month"];

const getInitialState = (statePeriodsList: string[]) => statePeriodsList[2];
export const Select = () => {
  const [periodName, setPeriod] = useState<string>(() => getInitialState(periodsList));

  const handleChange = (event: SelectChangeEvent<typeof periodName>) => {
    const {
      target: { value },
    } = event;
    setPeriod(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 144 }}>
        <SelectMui
          id="select-checkbox"
          IconComponent={MdExpandMore}
          value={periodName}
          onChange={handleChange}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
          input={<OutlinedInputRoot />}>
          {periodsList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={periodName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </SelectMui>
      </FormControl>
    </div>
  );
};
