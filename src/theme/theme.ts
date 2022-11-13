import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";

const initTheme = {
  palette,
  typography,
};

export const theme = createTheme(initTheme);
