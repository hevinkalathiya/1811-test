"use client";

import BuyCredits from "./BuyCredits";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

export const NavbarRoutes = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="">
        <p className="text-xl font-bold">Projects</p>
      </div>
      <div className="flex items-center gap-3">
        <BuyCredits />
        <Notification />
        <UserProfile />
      </div>
    </div>
  );
};
