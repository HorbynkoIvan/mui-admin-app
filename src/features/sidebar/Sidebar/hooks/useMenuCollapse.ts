import { useState } from "react";

interface ReturnInterface {
  collapseId: string;
  handleClick: (id: string) => void;
}

export const useMenuCollapse = (): ReturnInterface => {
  const [collapseId, setCollapseId] = useState("");

  const handleClick = (id: string): void => {
    collapseId === id ? setCollapseId("") : setCollapseId(id);
  };

  return {
    collapseId,
    handleClick,
  };
};
