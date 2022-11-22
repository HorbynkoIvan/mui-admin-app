import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import {
  MdHome,
  MdPeople,
  MdStorage,
  MdForum,
  MdPhotoSizeSelectActual,
  MdPublic,
  MdSettingsEthernet,
  MdSettingsInputComponent,
  MdTimer,
  MdSettings,
  MdPhonelinkSetup,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";

const categories1 = [
  {
    id: "Build",
    children: [
      {
        id: "Authentication",
        icon: <MdPeople />,
        active: true,
      },
      { id: "Database", icon: <MdStorage /> },
      { id: "Storage", icon: <MdStorage /> },
      { id: "Hosting", icon: <MdPublic /> },
      { id: "Functions", icon: <MdSettingsEthernet /> },
      {
        id: "Machine learning",
        icon: <MdSettingsInputComponent />,
      },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <MdSettings /> },
      { id: "Performance", icon: <MdTimer /> },
      { id: "Test Lab", icon: <MdPhonelinkSetup /> },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const menu = {
  id: "categories",
  title: "Categories",
  children: [
    {
      id: "growth_plan_id",
      title: "Growth Plan",
      type: "item",
      url: "/utils/util-typography",
      icon: <MdStorage />,
      breadcrumbs: false,
    },
    {
      id: "in_progress_id",
      title: "In progress",
      icon: <MdStorage />,
      children: [
        {
          id: "new_courses_id",
          title: "New Courses",
          type: "item",
          url: "/icons/tabler-icons",
          breadcrumbs: false,
        },
        {
          id: "deadline_approaching_id",
          title: "Deadline Approaching",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
        {
          id: "mandatory_id",
          title: "Mandatory",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
        {
          id: "live_training_id",
          title: "Live Trainings",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "calendar_id",
      title: "Calendar",
      url: "/utils/util-typography",
      icon: <MdStorage />,
    },
    {
      id: "my_certificates_id",
      title: "My Certificates",
      url: "/certificates",
      icon: <MdStorage />,
    },
    {
      id: "communities_id",
      title: "Communities",
      url: "/account",
      icon: <MdStorage />,
      children: [
        {
          id: "test1",
          title: "test1",
          type: "item",
          url: "/icons/tabler-icons",
          breadcrumbs: false,
        },
        {
          id: "test2",
          title: "test2",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
        {
          id: "test3",
          title: "test3",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
        {
          id: "test4",
          title: "test4",
          type: "item",
          url: "/icons/material-icons",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "my_account_id",
      title: "My account",
      url: "/account",
      icon: <MdStorage />,
    },
    {
      id: "settings_id",
      title: "Settings",
      type: "item",
      url: "/settings",
      icon: <MdStorage />,
    },
    {
      id: "support_id",
      title: "Support",
      url: "/support",
      icon: <MdStorage />,
    },
  ],
};
export const Sidebar = (props: DrawerProps): JSX.Element => {
  const [open, setOpen] = useState(null);
  const { ...other } = props;

  const handleClick = (id: any): void => {
    open === id ? setOpen(null) : setOpen(id);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {menu.children.map(({ id, title, icon, children = null }) => (
          <Box key={id}>
            {!children ? (
              <ListItemButton key={id} sx={{ py: 2, px: 3 }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            ) : (
              <>
                <ListItemButton onClick={() => handleClick(id)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                  {open === id ? <MdExpandLess /> : <MdExpandMore />}
                </ListItemButton>
                <Collapse in={open === id} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {children?.map(({ id: childId, title: childTitle }) => (
                      <ListItemButton key={childId} sx={{ py: 2, px: 3 }}>
                        <ListItemText>{childTitle}</ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
            <Divider />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};
