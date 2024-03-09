"use client";

import { CircleHelp, LogOutIcon, User } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Account from "./Account";
import { signOut } from "@/lib/utils";
import { getCurrentUser } from "@/lib/getCurrentUser";

const UserProfile = () => {
  const [user, setUser] = React.useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-full p-2 border ">
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger asChild>
          <User className="h-[18px] w-[18px]" color="gray" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto mt-3 mr-5">
          <DropdownMenuLabel className="flex justify-start items-center gap-3">
            <div className="mb-3">
              <Avatar>
                <AvatarImage src={user?.avatar_url} alt="@shadcn" />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <div className="">{user?.name}</div>
                <div className="bg-gray-200/50 px-1 border text-gray-500 border-gray-500 rounded-md text-[12px]">
                  Free
                </div>
              </div>
              <div className="text-gray-500 text-wrap text-ellipsis">
                {user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <Account />
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center">
            <CircleHelp className="h-5 w-5" />
            <p className=" text-sm ml-2">Support</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center"
            onClick={() => signOut()}
          >
            <LogOutIcon className="h-5 w-5" />
            <p className=" text-sm ml-2">Log out</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <a href="" className="text-[12px]">
              <span className="border-b"> Privacy policy</span> ,
              <span className="border-b"> Terms & conditions</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
