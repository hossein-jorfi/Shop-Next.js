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

  // useEffect(() => {
  //   setInterval(() => {
  //     nextRef.current?.click();
  //   }, 3000);
  // }, []);

  return (
    <div className="pattern h-64 flex justify-center items-center px-5">
      <div className="bg-red h-56 w-full rounded-xl flex items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="h-48 basis-1/6">
                <div className="h-full rounded-xl border flex justify-center items-center bg-red">
                  {index + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5" />
          <CarouselNext className="right-5" ref={nextRef} />
        </Carousel>
      </div>
    </div>
  );
}
