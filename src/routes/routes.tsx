import { MainLayout, AuthLayout } from "layouts";
import { Login, Registration, ForgotPassword, Dashboard } from "pages";

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
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
];
