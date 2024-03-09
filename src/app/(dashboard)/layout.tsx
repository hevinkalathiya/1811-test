import React from "react";
import SideBar from "./_components/SideBar";
import Navbar from "./_components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col inset-y-0 fixed z-50">
        <SideBar />
      </div>

      <div className="md:pl-56 h-full mt-[80px]">{children}</div>
    </div>
  );
};

export default layout;
