import Image from "next/image";
import React from "react";

export default function LogoBien() {
  return (
    <span className="text-green4 flex gap-2 items-center font-maven">
      {/* <img src="/image/Logo.png" alt="logo" className="w-[5px] object-cover h-[5px]" /> */}
      <Image src={"/images/Logo.png"} alt="Logo" width={20} height={20} />
      Bienvenu
    </span>
  );
}

