import React, { JSX } from "react";
import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { CarouselWrapper } from "./composant/CarouselWrapper";
import Image from "next/image";
import { Code } from "./Hero";
import { SIDE_PROJECTES } from "@/data/projectsData";



const Projects = () => {
  return (
    <Section ClassName="relative flex flex-col items-center justify-center gap-4 max-md:px-10">
      <div>
        <h1 className=" font-JetBrains text-2xl font-bold ">Projects 🚀</h1>
        <p className="w-3/4 max-sm:w-full text-gray-200">
          I create applications and tools to enhance my skills, foster my
          creativity, and showcase the projects I developed throughout my
          academic journey.
        </p>
      </div>
      <div className="w-full">
        <CarouselSize />
      </div>
    </Section>
  );
};

export default Projects;

export const CarouselSize: React.FC = () => {
  return (
    <CarouselWrapper align="center" className="w-full">
      {SIDE_PROJECTES.map((item, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
          {/* xl:basis-1/4 */}
          <div className="p-1">
            <Card className="p-5">
              <CardContent className="flex items-start gap-4 flex-col p-0 h-56">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {item.imageLogo ? (
                      <Image
                        src={item.imageLogo}
                        alt="photo"
                        width={50}
                        height={50}
                        className="w-6 h-6 object-cover rounded-full"
                      />
                    ) : (
                      <item.Logo className=" group-hover:text-green4" />
                    )}
                    <div className="font-maven font-bold">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-green4">
                      {item.poste}
                    </span>
                  </div>
                </div>

                <div className="">
                  <span className="text-sm text-gray-400">
                    {item.description}
                  </span>
                  <div className="w-full mt-2 flex  flex-wrap">
                    {item.stack &&
                      item.stack.length > 0 &&
                      item.stack.map((label, i) => (
                        <Code
                          key={i}
                          className="text-nowrap mb-2 flex gap-1 text-xs"
                        >
                          <label.Icon size={16} />
                          {label.title}
                        </Code>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselWrapper>
  );
};
