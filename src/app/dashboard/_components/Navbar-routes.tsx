"use client";

import { Button } from "@/components/ui/button";
import { Bell, PlusIcon, User } from "lucide-react";
import Image from "next/image";

export const NavbarRoutes = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="">
        <p className="text-xl font-bold">Projects</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-row justify-start bg-orange-200/20 border border-orange-500/30 rounded-lg p-2">
          <div className="flex flex-row justify-start items-center w-full gap-1">
            <Image
              src="/hat.svg"
              alt="iconpark_one"
              className="h-[20px] w-[20px]"
              height={20}
              width={20}
            />
            <p className="mr-0.5 font-bold !text-orange-500">
              Your Credits : 4
            </p>
            <Image
              src="/plusicon.svg"
              alt="iconpark_one"
              className="h-[20px] w-[20px] ml-2"
              height={20}
              width={20}
            />
          </div>
        </div>
        <div className="rounded-full p-2 border ">
          <Bell
            className="h-[18px] w-[18px]"
            color="gray"
          />
        </div>
        <div className="rounded-full p-2 border ">
          <User
            className="h-[18px] w-[18px]"
            color="gray"
          />
        </div>
      </div>
    </div>
  );
};
