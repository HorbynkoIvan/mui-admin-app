import { createTheme } from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";
import { general } from "./general";
import { createContext, useMemo, useState } from "react";

// color design tokens
// #666666
// #141b2d
// #4cceac
// #db4f4a
// #6870fa

export const tokens = (mode: string) => ({
  ...(mode === "dark" ? darkPalette : lightPalette),
});

// mui themeSettings
const themeSettings = (mode: string) => {
  const colors = tokens(mode);

  return {
    ...general,
    typography,
    palette: {
      // mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev: string) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
