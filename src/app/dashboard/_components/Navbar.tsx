import React from "react";
import MobileSidebar from "./MobileSidebar";
import { NavbarRoutes } from "./Navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4  h-full flex items-center bg-white shadhow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
