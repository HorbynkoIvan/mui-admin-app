import { MainLayout, AuthLayout } from "layouts";
import { Login, Registration, Dashboard } from "pages";

export const routes = [
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
];
