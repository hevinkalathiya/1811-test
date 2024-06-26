import { Button } from "@/components/ui/button";
import {
  LaptopMinimal,
  LayoutPanelTop,
  Play,
  PlusIcon,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Templates from "./_components/Templates";
import { cn } from "@/lib/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Projects = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <div className="p-4 max-w-7xl ">
      <div className="flex justify-between">
        <div className="">
          <span className="border-b-2 border-black pb-1 flex gap-2 text-sm font-bold items-center">
            <Play className="h-[16px] w-[16px]" /> My Videos
          </span>
        </div>
        <div className="">
          <Button
            className="bg-gradient text-white hover:text-white"
            variant={"outline"}
          >
            {" "}
            <PlusIcon className="mr-2" /> New Videos
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/add-media.svg"
          alt="iconoiradd_one"
          className="h-[48px] w-[48px] mt-[47px]"
          height={48}
          width={48}
        />
        <h2 className="mt-4 !text-blue_gray-900 tracking-[-0.72px] !font-semibold">
          Create your first video
        </h2>
        <p className="max-w-[350px] mt-[13px] text-center !font-normal text-gray-500 !leading-[200%]">
          Click on the below button to kickstart your video creation journey
          with video fast
        </p>
        <Button
          className="bg-gradient text-white hover:text-white mt-3"
          variant={"outline"}
        >
          <PlusIcon className="mr-2" /> New Videos
        </Button>
      </div>

      <Templates />
    </div>
  );
};

export default Projects;
