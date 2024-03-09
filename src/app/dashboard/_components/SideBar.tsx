"use client";

import React, { FC } from "react";
import SideBarRoutes from "./SideBarRoutes";
import Image from "next/image";
import {
  Boxes,
  UserPlus,
  AudioLines,
  BadgeCent,
  Zap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SideBarProps { }

const SideBar: FC<SideBarProps> = ({ }) => {
  return (
    <div className="h-screen flex flex-col overflow-y-auto border m-0 md:m-2 rounded-none  md:rounded-xl bg-white shadow-sm">
      <div className="p-0 md:p-2 mb-5 mt-2">
        <div className="flex flex-row justify-start items-center w-[11%] md:w-full gap-[3px]">
          <Image
            src="/videofat-logo.png"
            alt="clearbiticone"
            className="w-[48px] md:h-auto object-cover"
            width={48}
            height={48}
          />
          <h1 className="!text-gray-800 tracking-[-0.54px] ">
            <span className="text-gray-800">Video </span>
            <span className="text-indigo-600 font-bold italic">fast</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes routes={routes} />
      </div>
      <div className="flex flex-col p-2 mt-auto">
        <div
          className={cn(
            "flex items-center cursor-pointer gap-x-2 h-9 text-orange-500 text-sm font-[500] pl-3 transition-all hover:text-orange-600 bg-orange-200/50 border-transparent border hover:border mb-2 border-orange-300 mx-2 rounded-lg"
          )}
        >
          <div className="flex items-center gap-x-2 py-4">
            <Zap size={22} className={cn("text-orange-500")} />
            {"Upgrade Plan"}
            <ArrowRight size={22} className={cn("text-orange-500")} />
          </div>
        </div>
        <SideBarRoutes routes={bottomRoutes} />
      </div>
    </div>
  );
};

const routes = [
  {
    icon: Boxes,
    label: "My-Projects",
    href: "/dashboard/projects",
  },
  {
    icon: UserPlus,
    label: "AI Avatars",
    href: "/ai-avatars",
  },
  {
    icon: AudioLines,
    label: "Voices",
    href: "/voices",
  },
];
const bottomRoutes = [
  {
    icon: BadgeCent,
    label: "Pricing",
    href: "/pricing",
  },
];

export default SideBar;
