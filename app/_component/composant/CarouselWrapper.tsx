import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselWrapperProps {
  children: ReactNode;
  align?: "start" | "center" | "end"; // Alignement optionnel
  className?: string; // Classe CSS optionnelle
}

export function CarouselWrapper({
  children,
  align = "start",
  className = "w-full max-w-sm",
}: CarouselWrapperProps) {
  return (
    <Carousel
      opts={{
        align,
      }}
      className={className}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="max-lg:ml-5" />
      <CarouselNext className="max-lg:mr-5"/>
    </Carousel>
  );
}
