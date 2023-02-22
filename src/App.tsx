import { Router } from "routes";
import { BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function App(): JSX.Element {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
