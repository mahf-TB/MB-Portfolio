import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import ImageHero from "./ImageHero";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <>
      <span
        className={cn(
          "bg-accent/50 border border-accent p-1 mx-1 font-mono rounded-sm",
          className
        )}
        {...props}
      />
    </>
  );
};

export const Hero = () => {
  return (
    <Section ClassName="relative flex items-center justify-center gap-4 max-md:px-10 ">
      <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
        <div className="flex items-center gap-4">
          <div className="min-w-20 h-20 md:ml-5 bg-green4 rounded-full overflow-hidden  ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/user.png"
              alt="Profile"
              // width={50}
              // height={50}
              className="w-full h-full shadow-green4 rounded-t-full object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="font-maven text-2xl max-md:text-lg font-bold text-primary">
              I&apos;m Mahefa Bienvenu
            </h2>
            <span className="text-green4 max-md:text-sm">
              🎯 Fullstack Developer | Web & Mobile Specialist
            </span>
          </div>
        </div>
        <span className="md:ml-5 max-md:mt-0 mt-5 max-md:text-sm leading-5">
        Fullstack developer specialized in web and mobile development using
          <Code className="text-xs">Next.js</Code> ,
          <Code className="text-xs">TypeScript</Code> ,
          <Code className="text-xs text-nowrap">React Native</Code> and
          <Code className="text-xs">Flutter</Code> with
          backend expertise in{" "}
          <Code className="text-xs">Node.js</Code> ,
          <Code className="text-xs">Django</Code>. API design
          expert and scalable SaaS solution architect, I am detail-oriented,
          curious, autonomous, and user-experience driven.
        </span>
        
      </div>
      <div className="-z-50 bg-green4 max-md:w-[100px] w-[100px] h-[100px] absolute bottom-0 left-20 max-md:-bottom-2/4 max-md:right-14  rounded-full -translate-x-1/2 translate-y-6 blur-[90px]"></div>
      <div className="-z-50 bg-green4 max-md:w-[100px] w-[150px] h-[100px] absolute top-0 right-4 max-md:bottom-0 max-md:right-14  rounded-full -translate-x-1/2 translate-y-6 blur-[90px]"></div>
      <div className="w-2/4 relative max-md:hidden">
        <ImageHero />
      </div>
    </Section>
  );
};
