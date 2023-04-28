import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

const sidebarItems = [
  { title: "Dashboard", icon: <HomeOutlined />, to: "/" },
  { title: "Manage Team", icon: <PeopleOutlined />, to: "/team" },
  { title: "Contacts Information", icon: <ContactsOutlined />, to: "/contacts" },
  { title: "Invoices Balances", icon: <ReceiptOutlined />, to: "/invoices" },
  { title: "Profile Form", icon: <PersonOutlined />, to: "/form" },
  { title: "Calendar", icon: <CalendarTodayOutlined />, to: "/calendar" },
  { title: "FAQ Page", icon: <HelpOutlineOutlined />, to: "/faq" },
  { title: "Bar Chart", icon: <BarChartOutlined />, to: "/bar" },
  { title: "Pie Chart", icon: <PieChartOutlineOutlined />, to: "/pie" },
  { title: "Line Chart", icon: <TimelineOutlined />, to: "/line" },
  { title: "Geography Chart", icon: <MapOutlined />, to: "/geography" },
];

export const useSidebarConfig = () => sidebarItems;
