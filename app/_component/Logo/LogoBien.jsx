import Image from "next/image";
import React from "react";

export default function LogoBien() {
  return (
    <span className="text-green4 flex gap-2">
      <Image src={"/image/logo.png"} alt="logo" width={20} height={20} />
      Bienvenu
    </span>
  );
}

