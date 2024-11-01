import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { title } from "process";
import React from "react";
type WorkProps = {
  ImageFC: React.FC;
  title: string;
  name: string;
  description: string;
};

export const CardWork = (props: WorkProps) => {
  const ImageFC = props.ImageFC;
 const truncatedTexts = (texts : string) =>{
  return texts.length > 100 ? texts.slice(0, 100) + "..." : texts;
 }
    
  return (
    <div className="relative group">
      <div className=" bg-green4  absolute -inset-0.5 rounded-md blur opacity-75 group-hover:opacity-100 group-hover:blur-md"></div>
      <Card className="relative rounded-md ">
        <div className="  p-3 flex gap-2 items-center bg-backgrond  w-full">
          <div className="w-1/3 h-full relative">
            <ImageFC />
          </div>
          <div className="w-2/3">
            <div className="flex flex-col gap-1 mb-4">
              <h2 className="font-bold text-lg">{props.title}</h2>
              <span className="text-xs ">
               {props.name}
              </span>
              <span className="text-xs text-gray-400">
                {truncatedTexts(props.description)}
              </span>
            </div>
            <div className="relative flex justify-end">
              <Button className="relative text-xs uppercase border text-green4 bg-background hover:bg-accent/50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
