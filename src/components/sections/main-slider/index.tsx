"use client";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MainSlider() {

  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setInterval(() => {
      nextRef.current?.click();
    }, 2000);
  }, []);


  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-80">
            <div className="h-full border flex justify-center items-center bg-red/50">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext ref={nextRef} className="right-5" />
    </Carousel>
  );
}
