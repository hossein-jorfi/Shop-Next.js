"use client";
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";

export function MainSlider() {
  const nextRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   setInterval(() => {
  //     nextRef.current?.click();
  //   }, 3000);
  // }, []);

  return (
    <div className="pattern h-64 flex justify-center items-center px-5">
      <div className="bg-red h-56 w-full rounded-xl flex items-center justify-center px-5">
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="h-48 basis-[13%]">
                <ProductCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" ref={nextRef} />
        </Carousel>
      </div>
    </div>
  );
}
