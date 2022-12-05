import { green } from "@mui/material/colors";

export const palette = {
  primary: {
    light: "#FF81AE",
    main: "#F2387B",
    dark: "#002884",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
  warning: {
    main: "#ffc071",
    dark: "#ffb25e",
  },
  error: {
    light: "#FF0000",
    main: "#FF0000",
    dark: "#FF0000",
  },
  success: {
    light: green[50],
    main: green[500],
    dark: green[700],
  },
  bodyBackground: {
    main: "#F5F5F8",
  },
  divider: "#E6E8F0",
  magic: { main: "#1a1a1a" },
  red: {
    main: "#F2387B",
    hover: "#FF81AE",
  },
  grey: {
    50: "#F5F5F8",
    100: "#E3E5ED",
    200: "#D6D8E3",
    300: "#C1C5D5",
    400: "#ADB1C7",
    500: "#989EB9",
    600: "#7D8299",
    700: "#626679",
    800: "#3A3C49",
    900: "#23252D",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    magic: Palette["primary"];
    bodyBackground: Palette["primary"];
  }
  interface PaletteOptions {
    magic: PaletteOptions["primary"];
    bodyBackground: PaletteOptions["primary"];
  }
}
