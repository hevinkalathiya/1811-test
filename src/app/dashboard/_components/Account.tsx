import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  ArrowRightIcon,
  CircleHelp,
  User2Icon,
  Zap,
} from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Account = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center relative cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100">
          <User2Icon className="h-5 w-5" />
          <p className=" text-sm ml-2">Account</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="">Account</DialogTitle>
          <DialogDescription className="">
            Choose the avatar that best describes your use case
          </DialogDescription>
        </DialogHeader>
        <DropdownMenuSeparator />
        {/* todo add credentials */}
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-gray-600 font-semibold">Display Name</p>
            <p className="font-semibold">Tony Stark</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-600 font-semibold">Email Address</p>
            <p className="font-semibold">Hevink@gmail.com</p>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-600 font-semibold">Current Plan</p>
                <p className="font-semibold">Tony Stark</p>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-x-2 py-4 bg-orange-500/20"
              >
                <Zap size={22} className={cn("text-orange-500")} />
                {"Upgrade Plan"}
                <ArrowRight size={22} className={cn("text-orange-500")} />
              </Button>
            </div>
          </div>
          <div className="space-y-1 bg-slate-700/10 p-2 py-3 rounded-md w-full flex items-center gap-2 text-sm">
            <CircleHelp className="h-4 w-4" />
            Your Credits = 24
          </div>
        </div>
        <DropdownMenuSeparator />

        <DialogFooter className="w-full cursor-pointer">
          <DialogClose className="w-full cursor-pointer">
            <Button
              variant="outline"
              className="w-full text-white hover:text-white flex justify-between items-center cursor-pointer bg-gradient-to-br from-orange-500  to-orange-600"
            >
              <p className="font-normal">Want to join the affiliate program?</p>
              <div className="bg-transparent border flex items-center rounded-sm px-2 font-extralight text-[12px]">
                Join Now <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Account;
