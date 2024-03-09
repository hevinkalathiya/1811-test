"use client";

import { Bell, PlusIcon, User } from "lucide-react";
import BuyCredits from "./BuyCredits";

export const NavbarRoutes = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="">
        <p className="text-xl font-bold">Projects</p>
      </div>
      <div className="flex items-center gap-3">
        <BuyCredits />
        <div className="rounded-full p-2 border ">
          <Bell className="h-[18px] w-[18px]" color="gray" />
        </div>
        <div className="rounded-full p-2 border ">
          <User className="h-[18px] w-[18px]" color="gray" />
        </div>
      </div>
    </div>
  );
};
