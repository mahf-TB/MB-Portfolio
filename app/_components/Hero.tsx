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
    <>
      <Section ClassName=" relative flex items-center justify-center gap-4 p-0 max-md:flex-row-reverse">
        <div className="flex flex-col gap-2 w-2/4 max-md:w-full">
          <div className="flex flex-col max-md:w-full">
            <h2 className="font-maven text-5xl ml-5 max-md:text-2xl font-bold text-primary">
              I&apos;m Mahefa Bienvenu
            </h2>
            <span className="text-green4 ml-5">Full-Stack Developer</span>
            <span className="ml-5 max-md:mt-0 mt-5 py-2">
              Currently, I&apos;m a Developer at{" "}
              <Code className="text-yellow-300 bg-white/10 font-maven text-sm">
                <span className="text-blue-900">Onir</span>
                <span>Tech</span>
              </Code>
            </span>
            <span className="ml-5">
              Specialized in Frontend development with
              <Code className="text-xs">NextJs</Code> and full-stack projects
              using the<Code className="text-xs">MERN</Code>
            </span>
          </div>
        </div>
        <div className="w-1/3 relative">
          <div className="bg-green4 max-md:w-[100px] w-[200px] h-[200px] absolute top-16 max-md:bottom-14 max-md:right-0 right-5 rounded-full -translate-x-1/2 translate-y-6 blur-[90px]"></div>
          <div className="relative w-[350px] h-[350px] max-md:mx-auto mx-auto  max-md:w-48 max-md:h-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/user.png"
              alt="Photo sur GitHub"
              className="w-full h-full shadow-green4 rounded-t-full object-cover"
            />
          </div>
        </div>
      </Section>
      <div className="max-w-6xl mx-auto grid max-md:grid-cols-1 md:-mt-14 grid-cols-2 max-md:p-5 pl-24">
        <p className="ml-auto">
          Determined and autonomous, capable of successfully completing your
          projects with responsibility. Whether it&apos;s to secure a contract, list
          your services, or create a new custom application, I am ready to take
          on challenges with diligence and professionalism.
        </p>
      </div>
    </>
  );
};
