import { ListItemIcon, ListItemText, SvgIcon, Typography } from "@mui/material";
import { ListItemButton } from "common/components";
import { Link } from "react-router-dom";
import { palette } from "theme/palette";
import { MenuMainItem } from "../../interfaces";

type SidebarItemProps = MenuMainItem;

export const SidebarItem = ({ title, url, icon }: SidebarItemProps) => (
  <ListItemButton sx={{ py: 1.5, px: 2 }} component={Link} to={url} divider>
    <ListItemIcon sx={{ minWidth: 38 }}>
      <SvgIcon component={icon} sx={{ width: 20, height: 20 }} />
    </ListItemIcon>
    <ListItemText>
      <Typography variant="button" color={palette.grey[700]} textTransform="initial">
        {title}
      </Typography>
    </ListItemText>
  </ListItemButton>
);
