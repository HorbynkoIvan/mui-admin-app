import {
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarFooter } from "../SidebarFooter";
import { useMenuCollapse, useMenuConfig } from "./hooks";
import { MenuItemInterface } from "../interfaces";

const drawerWidth = 240;

export const Sidebar = (): JSX.Element => {
  const menuConfig = useMenuConfig();
  const { collapseId, handleClick } = useMenuCollapse();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
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
                <ListItemIcon sx={{ svg: { width: 20, height: 20 } }}>{icon}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            ) : (
              <>
                <ListItemButton sx={{ py: 1.5, px: 2 }} onClick={() => handleClick(id)} divider>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                  {collapseId === id ? <MdExpandLess /> : <MdExpandMore />}
                </ListItemButton>
                <Collapse in={collapseId === id} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {children?.map(({ id: childId, title: childTitle }: MenuItemInterface) => (
                      <ListItemButton key={childId}>
                        <ListItemText inset>{childTitle}</ListItemText>
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
