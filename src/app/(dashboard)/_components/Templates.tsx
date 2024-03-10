"use client";

import React, { FC } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TemplatesProps {
  type: string;
}

const Templates: FC<TemplatesProps> = ({ type }) => {
  const [data, setData] = useState<string[]>([]);

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
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {data?.map((item: any, i: React.Key) => {
        return (
          <div key={i} className="rounded-md  ">
            <img
              src={item?.images?.jpg?.image_url}
              alt="image"
              className={
                type === "landscape"
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
  );
};

export default Templates;
