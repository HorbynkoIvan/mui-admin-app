import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const Router = (): any => {
  const result = useRoutes(routes);

  return result;
};
