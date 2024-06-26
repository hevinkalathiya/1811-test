import { Bell } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Notification = () => {
  return (
    <div className="rounded-full p-2 border ">
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger asChild>
          <Bell className="h-[18px] w-[18px] cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96 mt-3 mr-5">
          <DropdownMenuLabel className="flex justify-between items-center">
            <div className="">Notifications</div>
            <div className="">
              <DropdownMenuItem className="text-gray-500 cursor-pointer">
                Clear All
              </DropdownMenuItem>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col justify-start items-start">
            <p className="text-sm">
              Edit your information in a swipe Sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
            <p className="text-gray-400 text-sm mt-2">12 May, 2025</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col justify-start items-start">
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable.
            </p>
            <p className="text-gray-400 text-sm mt-2">24 Feb, 2025</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col justify-start items-start">
            <p className="text-sm">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <p className="text-gray-400 text-sm mt-2">04 Jan, 2025</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notification;
