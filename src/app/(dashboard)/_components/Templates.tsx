"use client";

import React, { FC } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LaptopMinimal, LayoutPanelTop, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

type TemplatesProps = {};
const Templates: FC<TemplatesProps> = () => {
  const [data, setData] = useState<string[]>([]);
  const [currentTemplate, setCurrentTemplate] = useState<string>("portrait");

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/characters", {
        params: {
          q: "n",
          order_by: "favorites",
          sort: "desc",
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="block md:flex items-center  justify-between mt-5">
        <div className="">
          <span className="border-b-2 border-black pb-1 flex gap-2 text-sm font-bold items-center">
            <LayoutPanelTop className="h-[16px] w-[16px]" /> Template
          </span>
        </div>
        <div className="block md:flex gap-2">
          <Button
            size="sm"
            onClick={() => setCurrentTemplate("all")}
            className={cn(
              "border-transparent border-gray-300 mr-2",
              currentTemplate === "all" && "border border-black"
            )}
            variant={"outline"}
          >
            All
          </Button>
          <Button
            size="sm"
            variant={"outline"}
            onClick={() => setCurrentTemplate("portrait")}
            className={cn(
              "border-transparent border-gray-300 mr-2",
              currentTemplate === "portrait" && "border border-black"
            )}
          >
            <LaptopMinimal color="gray" className="mr-2" />
            Portrait Video (9:16)
          </Button>
          <Button
            size="sm"
            variant={"outline"}
            onClick={() => setCurrentTemplate("landscape")}
            className={cn(
              "border-transparent border-gray-300 mr-2",
              currentTemplate === "landscape" && "border border-black"
            )}
          >
            <Smartphone color="gray" className="mr-2" /> Landscape Video (16:9)
          </Button>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {data?.map((item: any, i: React.Key) => {
          return (
            <div key={i} className="rounded-md  ">
              <img
                src={item?.images?.jpg?.image_url}
                alt="image"
                className={
                  currentTemplate === "landscape"
                    ? "aspect-[9/16] object-cover md:aspect-auto md:h-[300px] lg:h-[400px] rounded-lg h-[350px] w-[300px]"
                    : "aspect-[9/16] object-cover md:aspect-auto md:h-[200px] lg:h-[200px] rounded-lg h-[200px] w-[500px]"
                }
              />
              <div className="py-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {item?.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Templates;
