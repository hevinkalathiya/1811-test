import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
        <SheetContent side="left" className="p-0 bg-blue-700">
          <SideBar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileSidebar;
