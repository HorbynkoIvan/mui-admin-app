import { useState, MouseEvent } from "react";
import { PeriodButton } from "../interfaces";

export const useToggleButton = (buttonsConfig: PeriodButton[]): any => {
  const [alignment, setAlignment] = useState(() => buttonsConfig[0].name);

  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return {
    alignment,
    handleChange,
  };
};
