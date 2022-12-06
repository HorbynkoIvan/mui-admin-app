import { ListItemText, Typography } from "@mui/material";
import { palette } from "theme/palette";
import { MenuSubItem } from "../../interfaces";
import { ListItemButton } from "common/components";
import { Link } from "react-router-dom";

type SidebarSubItemProps = MenuSubItem;

export const SidebarSubItem = ({ title, url }: SidebarSubItemProps) => (
  <ListItemButton component={Link} to={url}>
    <ListItemText sx={{ pl: "38px" }}>
      <Typography variant="button" color={palette.grey[700]} textTransform="initial">
        {title}
      </Typography>
    </ListItemText>
  </ListItemButton>
);
