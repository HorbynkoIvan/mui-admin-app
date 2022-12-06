import { ListItemButton, ListItemIcon, ListItemText, SvgIcon, Typography } from "@mui/material";
import { palette } from "theme/palette";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { MenuCollapseItem } from "../../interfaces";
import { MouseEvent } from "react";

type SidebarItemCollapseProps = MenuCollapseItem & {
  collapseId: string;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
};

export const SidebarItemCollapse = ({
  id,
  title,
  collapseId,
  icon,
  handleClick,
}: SidebarItemCollapseProps) => (
  <ListItemButton id={id} disableGutters sx={{ py: 1.5, px: 2 }} onClick={handleClick} divider>
    <ListItemIcon sx={{ minWidth: 38 }}>
      <SvgIcon component={icon} sx={{ width: 20, height: 20 }} />
    </ListItemIcon>
    <ListItemText>
      <Typography variant="button" color={palette.grey[700]} textTransform="initial">
        {title}
      </Typography>
    </ListItemText>
    {collapseId === id ? <MdExpandLess /> : <MdExpandMore />}
  </ListItemButton>
);
