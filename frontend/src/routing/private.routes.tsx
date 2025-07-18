import React from "react";
import { Outlet } from "react-router-dom";
import AdminHome from "../Pages/AdminHome";
import ProtectedRoute from "../Components/protected-routes";

const AdminLayout = () => <Outlet />;

const routers = [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <ProtectedRoute element={<AdminHome />} />,
      },
      // {
      //   path: "/region-directory",
      //   element: <ProtectedRoute element={<StatesPage />} />,
      // },
    ],
  },
];

export { routers as PrivateRoutes };
