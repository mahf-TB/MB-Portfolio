import Image from "next/image";
import { Header } from "./_component/Header";
import { Hero } from "./_component/Hero";
import { Status } from "./_component/Status";

export default function Home() {
  return (
    <main className="font-maven">
      <Header />
      <div className="h-[50px]"/>
      <Hero />
      <div className="h-[50px]"/>
      <Status />
    </main>
  );
}
