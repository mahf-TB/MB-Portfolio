import React from "react";
import { Section } from "./Section";
import { CardWork } from "./composant/CardWork";
import Image from "next/image";

export default function Work() {
  return (
    <Section ClassName="max-md:mt-0 mt-20 relative">



      {/* <div className="-z-50 bg-green4 w-[200px] h-[250px] p-20 absolute top-10 left-1/2 right-1/2 rounded-t-full -translate-x-1/2 translate-y-6 blur-[90px]"></div> */}
      <h1 className="text-3xl my-5 font-maven">Work Experience</h1>
      <div className="grid md:grid-cols-2 gap-10 ">
        <CardWork
          ImageFC={ImageGU}
          name="Full-Stacl Developer with Next.JS and Node Express"
          title="The GU-LMS platform"
          description="Development of an application to optimize career management for employees, allowing them to track their grade advancements."
        />
        <CardWork
          ImageFC={ImageGU}
          name="Full-Stacl Developer with Next.JS and Node Express"
          title="Optimization of "
          description="It facilitates course management, tracking of academic progress,and access to educational resources, while promoting collaboration among students, teachers, and administrativestaff."
        />
        <CardWork
          ImageFC={ImageGU}
          name="Full-Stacl Developer with Next.JS and Node Express"
          title="The GU-LMS platform"
          description="Development of an application to optimize career management for employees, allowing them to track their grade advancements."
        />
        <CardWork
          ImageFC={ImageGU}
          name="Full-Stacl Developer with Next.JS and Node Express"
          title="Optimization of "
          description="It facilitates course management, tracking of academic progress,and access to educational resources, while promoting collaboration among students, teachers, and administrativestaff."
        />
        {/* <CardWork /> */}
      </div>
    </Section>
  );
}

const ImageGU: React.FC = () => {
  return (
    <>
      <Image
        src={"/image/w1/gu-onirtech.png"}
        alt="photo work"
        width={300}
        height={150}
        className="w-full h-full"
      />
      <Image
        src={"/image/onirtech.png"}
        alt="photo work"
        width={250}
        height={150}
        className="w-full absolute -bottom-2"
      />
    </>
  );
};
