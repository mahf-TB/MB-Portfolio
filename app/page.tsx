import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./_component/Header";
import { Hero } from "./_component/Hero";
import { Status } from "./_component/Status";
import { Skills } from "./_component/Skills";

export default function Home() {
  return (
      <main className="font-maven">
        <Header />
          <div className="h-[50px]" />
          <Hero />
          <div className="h-[50px]" />
          <Status />
          <div className="h-[50px]" />
          <Skills />
          <div className="h-[50px]" />
          <div className="h-[50px]" />
      </main>
  );
}
