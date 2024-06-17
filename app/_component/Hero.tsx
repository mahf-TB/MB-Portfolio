import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { FbIcon } from "./icons/FbIcon";

export const Code = ({className , ...props}:ComponentPropsWithoutRef<"span"> ) => {
  return (
    <>
    <span className={cn("bg-accent/30 border border-accent p-1 mx-1 font-mono rounded-sm", className)} {...props} />
    </> 
  )
}
 

export const Hero = () => {
  return (
    <>
      <Section ClassName="flex items-start gap-4 max-md:px-10 max-md:flex-col-reverse">
        <div className="flex flex-col w-2/3 max-md:w-full">
          <h2 className=" font-maven text-5xl font-bold text-primary">Mahefa Bienvenu</h2>
          <h3 className="text-2xl font-maven text-green4 mb-3 ">Developpeur FullStack</h3>
          <p className="text-foreground text-base my-3">
            Lorem ipsum dolor sit amet, consectetur <Code className="inline-flex items-center gap-1"><FbIcon size={14} className="inline" ></FbIcon>Facebook</Code>adipisicing elit. Pariatur
            maiores reprehenderit, alias, vel iusto vitae minima totam
            asperiores, laudantium id ipsam! Dignissimos, doloremque?
            Praesentium fugit distinctio, quidem cumque qui temporibus!
          </p>
        </div>
        
          <div className="w-1/3">
            <div className="w-[250px] h-[250px] mx-auto  max-md:w-56 max-md:h-56">
            <img
              src="/image/mahefa.JPG"
              alt="Photo sur GitHub"
              className="w-full h-full rounded-full border-[5px] border-green4 object-cover"
            />
            </div>
           
          
        </div>
      </Section>
    </>
  );
};


