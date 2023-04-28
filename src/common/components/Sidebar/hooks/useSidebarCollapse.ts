import { useState } from "react";

type Return = {
  selected: string;
  isCollapsed: boolean;
  handleCollapsed: () => void;
  handleSelected: (title: string) => void;
};

export const useSidebarCollapse = (): Return => {
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return {
    selected,
    isCollapsed,
    handleCollapsed: () => setIsCollapsed(!isCollapsed),
    handleSelected: (title) => setSelected(title),
  };
};
