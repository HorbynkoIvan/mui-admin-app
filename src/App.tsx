import { BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Topbar from "./scense/global/Topbar";

export default function App(): JSX.Element {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <main className="content">
            <Topbar
            // setIsSidebar={setIsSidebar}
            />
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
