import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { general } from "./general";

const initTheme = {
  palette,
  typography,
  general,
};

export const theme = createTheme(initTheme);
