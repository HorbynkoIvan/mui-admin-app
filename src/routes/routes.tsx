import { MainLayout, AuthLayout } from "layouts";
import { Login, Registration, ForgotPassword, Dashboard, Certificates, Calendar } from "pages";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/growth-plan", element: <Dashboard /> },
      { path: "/new-courses", element: <Dashboard /> },
      { path: "/deadline", element: <Dashboard /> },
      { path: "/mandatory", element: <Dashboard /> },
      { path: "/live-training", element: <Dashboard /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/certificates", element: <Certificates /> },
      { path: "/account", element: <Dashboard /> },
      { path: "/settings", element: <Dashboard /> },
      { path: "/support", element: <Dashboard /> },
    ],
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
