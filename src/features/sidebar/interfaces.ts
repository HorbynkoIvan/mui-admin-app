import { IconType } from "react-icons";

export type MenuMainItem = {
  id: string;
  title: string;
  url: string;
  icon: IconType;
};

export type MenuCollapseItem = {
  id: string;
  title: string;
  icon: IconType;
  subMenu: Array<MenuSubItem>;
};

export type MenuSubItem = {
  id: string;
  title: string;
  url: string;
};

export type MenuItem = MenuMainItem | MenuCollapseItem | MenuSubItem;

export function MenuMainItemGuard(menuItem: MenuItem): menuItem is MenuMainItem {
  return "icon" in menuItem && !("subMenu" in menuItem);
}

export function MenuCollapseItemGuard(menuItem: MenuItem): menuItem is MenuCollapseItem {
  return "subMenu" in menuItem;
}
