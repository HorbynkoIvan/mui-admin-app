import { Box } from "@mui/material";
import { ProSidebar, Menu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { SidebarWrapper, SidebarItem, SidebarProfile, SidebarCollapseItem } from "./components";
import { useSidebarConfig, useSidebarCollapse } from "./hooks";

export const Sidebar = () => {
  const sidebarItems = useSidebarConfig();
  const { selected, handleSelected, isCollapsed, handleCollapsed } = useSidebarCollapse();

  return (
    <SidebarWrapper>
      <ProSidebar collapsed={isCollapsed} toggled>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <SidebarCollapseItem isCollapsed={isCollapsed} handleCollapsed={handleCollapsed} />

          {!isCollapsed && <SidebarProfile />}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {sidebarItems.map(({ title, to, icon }) => (
              <SidebarItem
                key={title}
                title={title}
                to={to}
                icon={icon}
                selected={selected}
                handleSelected={handleSelected}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </SidebarWrapper>
  );
};
