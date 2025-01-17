"use client";
// import { useEffect, useRef } from "react";
import Products from "./products";

export function MainSlider() {
  // const nextRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   setInterval(() => {
  //     nextRef.current?.click();
  //   }, 3000);
  // }, []);

  return (
    <div className="pattern h-64 flex justify-center items-center px-5">
      <div className="bg-red h-56 w-full rounded-xl flex items-center justify-center px-5">
        <Products />
      </div>
    </div>
  );
}
