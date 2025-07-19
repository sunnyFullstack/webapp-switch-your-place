import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.jpg";
import Logo from "../../Components/Logo";
import Button from "../Button";

const Sidebar = () => {
  return (
    <div className=" h-screen w-64 bg-gray-800 text-white shadow-lg z-40">
      <div className="p-6 text-2xl font-bold  flex justify-center">
        <Logo src={logoImg} size={100} className="border-2 border-grey" />
      </div>
      <nav className="p-4 space-y-4">
        <Link
          to="/home"
          className="block hover:bg-gray-700 p-2 rounded transition"
        >
          Home
        </Link>
        <Link
          to="/request"
          className="block hover:bg-gray-700 p-2 rounded transition"
        >
          List Of Requests
        </Link>
        <Link
          to="/transfer"
          className="block hover:bg-gray-700 p-2 rounded transition"
        >
          Find Transfer
        </Link>
        <Link
          to="/settings"
          className="block hover:bg-gray-700 p-2 rounded transition"
        >
          Settings
        </Link>
        <Button className="pl-[10px] font-normal">Logout</Button>
      </nav>
    </div>
  );
};

export default Sidebar;
