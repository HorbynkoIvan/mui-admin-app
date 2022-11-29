import { Router } from "routes";
import { BrowserRouter } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
