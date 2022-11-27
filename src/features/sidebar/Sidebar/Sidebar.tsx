import {
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  SvgIcon,
  Typography,
} from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarFooter } from "../SidebarFooter";
import { DRAWER_WIDTH } from "common/constants";
import { palette } from "theme/palette";
import { useMenuCollapse, useMenuConfig } from "./hooks";
import { MenuItemInterface } from "../interfaces";

export const Sidebar = (): JSX.Element => {
  const menuConfig = useMenuConfig();
  const { collapseId, handleClick } = useMenuCollapse();

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left">
      <List dense disablePadding>
        <SidebarHeader />
        {menuConfig.map(({ id, title, icon, url, children = null }) => (
          <Box key={id}>
            {!children ? (
              <ListItemButton key={id} sx={{ py: 1.5, px: 2 }} divider>
                <ListItemIcon sx={{ minWidth: 38 }}>
                  <SvgIcon component={icon} sx={{ width: 20, height: 20 }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="button" color={palette.grey[700]} textTransform="initial">
                    {title}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            ) : (
              <>
                <ListItemButton sx={{ py: 1.5, px: 2 }} onClick={() => handleClick(id)} divider>
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
                <Collapse in={collapseId === id} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {children?.map(({ id: childId, title: childTitle }: MenuItemInterface) => (
                      <ListItemButton key={childId}>
                        <ListItemText sx={{ pl: "38px" }}>
                          <Typography
                            variant="button"
                            color={palette.grey[700]}
                            textTransform="initial">
                            {childTitle}
                          </Typography>
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </Box>
        ))}
      </List>
      <SidebarFooter />
    </Drawer>
  );
};
