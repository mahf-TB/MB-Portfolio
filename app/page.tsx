import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import Work from "./_components/Work";

export default function Home() {
  return (
    <main className="font-maven  bg-background">
      <Header />
      <div className="h-[50px]" />
      <Hero />
      <div className="h-[50px]" />
      <Work />
      <div className="h-[50px]" />
      <Status />
      <div className="h-[50px]" />
      <Skills />
      <div className="h-[50px]" />
      <div className="h-[50px]" />
    </main>
  );
}
