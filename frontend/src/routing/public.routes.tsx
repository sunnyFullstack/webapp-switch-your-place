import React from "react";
import { Outlet } from "react-router-dom";
import SignInPage from "../Pages/SignInPage";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home";

const AppLayout = () => <Outlet />;

const routers = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];

export { routers as PublicRoutes };
