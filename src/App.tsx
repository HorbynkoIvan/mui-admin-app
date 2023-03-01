import { BrowserRouter } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Router } from "routes";
// import Topbar from "./features/global/Topbar";
// import Dashboard from "./features/dashboard";
// import Sidebar from "./features/global/Sidebar";

export default function App(): JSX.Element {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
          {/* <div className="app"> */}
          {/*   <Sidebar /> */}
          {/*   <main className="content"> */}
          {/*     <Topbar */}
          {/*     // setIsSidebar={setIsSidebar} */}
          {/*     /> */}
          {/*   </main> */}
          {/* </div> */}
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
