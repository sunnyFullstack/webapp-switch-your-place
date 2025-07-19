import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHome from "../Pages/AdminHome";
import ProtectedRoute from "../Components/protected-routes";
import Sidebar from "../Components/Sidebar";

const AdminLayout = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);
  const onClose = () => {
    setIsSidebar((prevState) => !prevState);
  };
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <main className="flex-1 p-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const routers = [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/home",
        element: <ProtectedRoute element={<AdminHome />} />,
      },
    ],
  },
];

export { routers as PrivateRoutes };
