import { styled, Tab as TabMui, TabProps } from "@mui/material";

const TabStyled = styled(TabMui)(({ theme }) => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: theme.typography.fontWeightRegular,
  color: "#333333",
  "&:hover": {},
  "&.Mui-selected": {
    color: "#89C238",
  },
  "&.Mui-focusVisible": {},
}));

export const Tab = (props: TabProps) => <TabStyled {...props} disableRipple />;
