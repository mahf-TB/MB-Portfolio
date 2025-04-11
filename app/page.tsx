import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import Projects from "./_components/Projects";



export default function Home() {
  return (
    <main className="font-maven  bg-background">
      <Header />
      <div className="h-[50px]" />
      <Hero />
      <div className="h-[50px]" />
      <Projects />
      <div className="h-[50px]" />
      {/* <Status />
      <div className="h-[50px]" />
      <Skills /> */}
      <div className="h-[50px]" />
      <div className="h-[50px]" />
    </main>
  );
}
