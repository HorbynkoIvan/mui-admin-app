import { ReactNode } from "react";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "theme";

type SidebarItemProps = {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  handleSelected: (title: string) => void;
};

export const SidebarItem = ({ title, to, icon, selected, handleSelected }: SidebarItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => handleSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
