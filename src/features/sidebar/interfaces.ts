export type MenuItemInterface = {
  id: string;
  title: string;
  url?: string;
  icon?: any;
  children?: Array<MenuItemInterface>;
};
