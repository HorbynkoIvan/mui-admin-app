import { SyntheticEvent, useState } from "react";

export const useTabs = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTabId(newValue);
  };

  return {
    handleChange,
    activeTabId,
  };
};
