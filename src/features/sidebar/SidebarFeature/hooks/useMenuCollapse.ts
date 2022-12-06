import { MouseEvent, useState } from "react";

interface ReturnInterface {
  collapseId: string;
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

export const useMenuCollapse = (): ReturnInterface => {
  const [collapseId, setCollapseId] = useState<string>("");

  const handleClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    const id = currentTarget.id;
    collapseId === id ? setCollapseId("") : setCollapseId(id);
  };

  return {
    collapseId,
    handleClick,
  };
};
