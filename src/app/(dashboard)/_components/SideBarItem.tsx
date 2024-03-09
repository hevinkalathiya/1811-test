"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const SideBarItem: React.FC<SideBarItemProps> = ({
  href,
  icon: Icon,
  label,
}: SideBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/}`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer gap-x-2 h-9 text-slate-500 text-sm font-[500] pl-3 transition-all hover:text-slate-600 hover:bg-slate-200/20 border-transparent border hover:border mb-2 hover:border-slate-300 mx-2 rounded-lg",
        isActive &&
        "text-slate-700 border-slate-300 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-slate-700")}
        />
        {label}
      </div>
    </div>
  );
};

export default SideBarItem;
