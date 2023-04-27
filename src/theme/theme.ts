import { createContext, useMemo, useState } from "react";
import { createTheme, Theme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";
import { general } from "./general";
import { components } from "./components";
import { PaletteMode } from "@mui/material";

export const tokens = (mode: PaletteMode) => ({
  ...(mode === "dark" ? darkPalette : lightPalette),
});

// mui themeSettings
const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);

  const palette = {
    primary: {
      main: colors.primary[mode === "light" ? 100 : 500],
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
      default: mode === "light" ? "#fcfcfc" : colors.primary[500],
    },
  };

  return {
    components,
    ...general,
    typography,
    palette: {
      mode: mode,
      ...palette,
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

type UseModeReturnType = [theme: Theme, colorMode: { toggleColorMode: () => void }];

export const useMode = (): UseModeReturnType => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev: string) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: Theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
