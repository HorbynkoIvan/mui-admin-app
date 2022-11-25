export type MenuItemInterface = {
  id: string;
  title: string;
  url?: string;
  icon?: string;
  children?: Array<MenuItemInterface>;
};
