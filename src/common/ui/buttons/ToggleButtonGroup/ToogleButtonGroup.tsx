import {
  ToggleButton,
  ToggleButtonGroup as ToggleButtonGroupMui,
  ToggleButtonGroupProps,
  Typography,
  styled,
} from "@mui/material";
import { useToggleButton } from "./hook";
import { PeriodButton } from "./interfaces";

const StyledToggleButtonGroup = styled(ToggleButtonGroupMui)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  height: "32px",
  overflow: "hidden",
  ".MuiButtonBase-root": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {},
    "&:first-of-type": {},
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&.Mui-Selected": {},
  },
}));

type Props = ToggleButtonGroupProps & { buttonsConfig: PeriodButton[] };

export const ToggleButtonGroup = ({ buttonsConfig, ...props }: Props): JSX.Element => {
  const { alignment, handleChange } = useToggleButton(buttonsConfig);

  console.log(alignment);
  return (
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      {...props}>
      {buttonsConfig.map(({ id, name }) => (
        <ToggleButton key={id} value={name}>
          <Typography variant="button" textTransform="initial">
            {name}
          </Typography>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
