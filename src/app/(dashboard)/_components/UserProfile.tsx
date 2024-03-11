"use client";

import { CircleHelp, LogOutIcon, PlusIcon, User } from "lucide-react";
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
import { getCurrentUser } from "@/lib/getCurrentUser";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

const UserProfile = () => {
  const [user, setUser] = React.useState<any>();
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <DropdownMenu dir="ltr">
        <DropdownMenuTrigger asChild>
          {user ? (
            <Avatar className="h-[35px] w-[35px]">
              <AvatarImage src={user?.avatar_url} alt="You" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          ) : (
            <div className="cursor-pointer rounded-full p-2 border">
              <User className="h-[18px] w-[18px]" color="gray" />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto mt-3 mr-5">
          <DropdownMenuLabel className="flex justify-start items-center gap-3">
            <div>
              <Avatar>
                <AvatarImage src={user?.avatar_url} alt="You" />
                <AvatarFallback>Vatsal</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <div className="">{user?.name ?? "Vatsal"}</div>
                <div className="bg-gray-200/50 px-1 border text-gray-500 border-gray-500 rounded-md text-[12px]">
                  Free
                </div>
              </div>
              <div className="text-gray-500 text-wrap text-ellipsis">
                {user?.email ?? "vatsal1811@gmail.com"}
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
            onClick={handleLogout}
          >
            <LogOutIcon className="h-5 w-5" />
            <p className=" text-sm ml-2">Log out</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="">
            <div className="md:hidden w-full mx-auto flex flex-row justify-start bg-orange-200/20 border border-orange-500/10 rounded-lg p-2 cursor-pointer">
              <div className="flex flex-row justify-start items-center w-full gap-1">
                <Image
                  src="/hat.svg"
                  alt="iconpark_one"
                  className="h-[20px] w-[20px]"
                  height={20}
                  width={20}
                />
                <p className="mr-0.5 font-bold !text-orange-600">
                  Your Credits : 4
                </p>
                <PlusIcon className="h-[20px] w-[20px] ml-2 bg-orange-500 rounded-sm" color="white" />
              </div>
            </div>
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
