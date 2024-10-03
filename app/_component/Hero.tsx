import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { FbIcon } from "./icons/FbIcon";
import Image from "next/image";

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
    <Section ClassName=" relative flex items-start justify-center gap-4 max-md:px-10 max-md:flex-row-reverse">
      <div className="flex flex-col gap-2 w-2/4 max-md:w-full">
        <h2 className="font-maven text-5xl ml-5 max-md:text-2xl font-bold text-primary">
          I'm Mahefa Bienvenu
        </h2>
        <span className="text-green4 ml-5">Full-Stack Developer</span>
        <span className="ml-5 max-md:mt-0 mt-10 py-2">
          Currently, I'm a Developer at{" "}
          <Code className="text-yellow-300 ">
            OnirTech
          </Code>
        </span>
        <span className="ml-5">Specialized in Frontend development with<Code className="text-xs">NextJs</Code> and full-stack projects using the<Code className="text-xs">MERN</Code></span>
      </div>
      <div className="w-1/3 relative">
        <div className="-z-50 bg-green4 max-md:w-[100px] w-[200px] h-[100px] absolute top-10 max-md:bottom-14 max-md:right-0 right-5 rounded-full -translate-x-1/2 translate-y-6 blur-[90px]"></div>
        <div className=" w-[250px] h-[250px] max-md:mx-auto mx-auto  max-md:w-56 max-md:h-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/user.png"
            alt="Photo sur GitHub"
            className="w-full h-full shadow-green4 rounded-t-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};
