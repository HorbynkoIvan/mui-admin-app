import { useState } from "react";

type Return = {
  isCollapsed: boolean;
  handleCollapsed: () => void;
};

export const useSidebar = (): Return => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return {
    isCollapsed,
    handleCollapsed: () => setIsCollapsed(!isCollapsed),
  };
};
