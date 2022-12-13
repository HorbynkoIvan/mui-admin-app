import {
  MdFeed,
  MdCastForEducation,
  MdOutlineCalendarViewMonth,
  MdStar,
  MdPeople,
  MdPerson,
  MdSettings,
  MdSupport,
  MdVerifiedUser,
} from "react-icons/md";
import { MenuItem } from "../../interfaces";

const menuConfig: MenuItem[] = [
  {
    id: "growth_plan_id",
    title: "Growth Plan",
    url: "/growth-plan",
    icon: MdFeed,
  },
  {
    id: "in_progress_id",
    title: "In progress",
    icon: MdCastForEducation,
    subMenu: [
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
    icon: MdOutlineCalendarViewMonth,
  },
  {
    id: "my_certificates_id",
    title: "My Certificates",
    url: "/certificates",
    icon: MdStar,
  },
  {
    id: "communities_id",
    title: "Communities",
    icon: MdPeople,
    subMenu: [
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
    icon: MdPerson,
  },
  {
    id: "settings_id",
    title: "Settings",
    url: "/settings",
    icon: MdSettings,
  },
  {
    id: "support_id",
    title: "Support",
    url: "/support",
    icon: MdSupport,
  },
  {
    id: "user_id",
    title: "User",
    url: "/user",
    icon: MdVerifiedUser,
  },
];

export const useMenuConfig = (): MenuItem[] => menuConfig;
