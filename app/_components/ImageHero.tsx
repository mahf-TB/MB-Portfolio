import React from "react";
import Image from "next/image";
import { Section } from "./Section";

import code from "@/assets/gif/code-blocks.gif";
import code1 from "@/assets/gif/code-coding.gif";
import code2 from "@/assets/gif/test-typing.gif";
import code3 from "@/assets/gif/sgb.gif";

const ImageHero = () => {
  return (
    <div className="px-8 lg:flex md:flex hidden items-center justify-center h-[30vh]">
      <div className=" h-[100%] w-[100%]  flex items-center justify-center ">
        <Image
          className="relative lg:bottom-[8%] lg:left-[13%] lg:w-[30%]
                    md:bottom-[7%] md:left-[35%] md:w-[42%]
                    border-2 border-black shadow-md"
          src={code1}
          alt=""
        />

        <Image
          className="relative lg:left-[5%] lg:top-[2%] lg:w-[40%]
                    md:left-[21%] md:top-[2%] md:w-[57%]
                    border-2 border-black shadow-md"
          src={code3}
          alt=""
        />

        <Image
          className="relative lg:bottom-[12%] lg:w-[30%] 
                    md:bottom-[8%] md:w-[45%]
                    border-2 border-black shadow-md"
          src={code2}
          alt=""
        />

        <Image
          className="relative lg:top-[12%] lg:right-[35%] lg:w-[30%]  
                    md:top-[13%] md:right-[27%] md:w-[50%]
                    border-2 border-black shadow-md"
          src={code}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageHero;
