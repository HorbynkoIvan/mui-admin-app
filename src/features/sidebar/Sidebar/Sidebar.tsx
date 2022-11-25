import {
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  MdFeed,
  MdCastForEducation,
  MdOutlineCalendarViewMonth,
  MdStar,
  MdPeople,
  MdStorage,
  MdPerson,
  MdExpandLess,
  MdExpandMore,
  MdSupport,
  MdSettings,
} from "react-icons/md";
import { SidebarHeader } from "../SidebarHeader";
import { useMenuCollapse } from "./hooks";

const menu = {
  id: "categories",
  title: "Categories",
  children: [
    {
      id: "growth_plan_id",
      title: "Growth Plan",
      url: "/growth-plan",
      icon: <MdFeed />,
    },
    {
      id: "in_progress_id",
      title: "In progress",
      icon: <MdCastForEducation />,
      children: [
        {
          id: "new_courses_id",
          title: "New Courses",
          url: "/new-courses",
        },
        {
          id: "deadline_approaching_id",
          title: "Deadline Approaching",
          url: "/deadline",
        },
        {
          id: "mandatory_id",
          title: "Mandatory",
          url: "/mandatory",
        },
        {
          id: "live_training_id",
          title: "Live Trainings",
          url: "/live-training",
        },
      ],
    },
    {
      id: "calendar_id",
      title: "Calendar",
      url: "/calendar",
      icon: <MdOutlineCalendarViewMonth />,
    },
    {
      id: "my_certificates_id",
      title: "My Certificates",
      url: "/certificates",
      icon: <MdStar />,
    },
    {
      id: "communities_id",
      title: "Communities",
      icon: <MdPeople />,
      children: [
        {
          id: "test1",
          title: "test1",
          url: "/test1",
        },
        {
          id: "test2",
          title: "test2",
          url: "/test2",
        },
        {
          id: "test3",
          title: "test3",
          url: "/test3",
        },
        {
          id: "test4",
          title: "test4",
          url: "/test4",
        },
      ],
    },
    {
      id: "my_account_id",
      title: "My account",
      url: "/account",
      icon: <MdPerson />,
    },
    {
      id: "settings_id",
      title: "Settings",
      url: "/settings",
      icon: <MdSettings />,
    },
    {
      id: "support_id",
      title: "Support",
      url: "/support",
      icon: <MdSupport />,
    },
  ],
};

const drawerWidth = 240;

export const Sidebar = (): JSX.Element => {
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
        {menu.children.map(({ id, title, icon, url, children = null }) => (
          <Box key={id}>
            {!children ? (
              <ListItemButton key={id} sx={{ py: 1.5, px: 2 }} divider>
                <ListItemIcon
                  sx={{ width: 20, height: 20 }}
                  // itemProp={{ style: { width: 20, height: 20 } }}
                >
                  {icon}
                </ListItemIcon>
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
                    {children?.map(({ id: childId, title: childTitle }) => (
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
    </Drawer>
  );
};
