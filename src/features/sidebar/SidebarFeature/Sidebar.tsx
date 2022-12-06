import { Drawer, List, Box, Collapse } from "@mui/material";
import {
  SidebarHeader,
  SidebarItem,
  SidebarItemCollapse,
  SidebarSubItem,
  SidebarFooter,
} from "./components";
import { DRAWER_WIDTH } from "common/constants";
import { useMenuCollapse, useMenuConfig } from "./hooks";
import { MenuMainItemGuard, MenuCollapseItemGuard } from "../interfaces";

export const Sidebar = (): JSX.Element => {
  const menuConfig = useMenuConfig();
  const { collapseId, handleClick } = useMenuCollapse();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          border: 0,
          boxSizing: "border-box",
        },
      }}>
      <List dense disablePadding>
        <SidebarHeader />
        {menuConfig.map((menuItem) => (
          <Box key={menuItem.id}>
            {MenuMainItemGuard(menuItem) && <SidebarItem {...menuItem} />}

            {MenuCollapseItemGuard(menuItem) && (
              <>
                <SidebarItemCollapse
                  {...menuItem}
                  collapseId={collapseId}
                  handleClick={handleClick}
                />
                <Collapse in={collapseId === menuItem.id} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {menuItem.subMenu.map((subMenuItem) => (
                      <SidebarSubItem key={subMenuItem.id} {...subMenuItem} />
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
