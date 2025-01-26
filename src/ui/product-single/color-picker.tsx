"use client";

import { cn } from "@/lib/utils";

const ITEMS = [
  {
    title: "black",
    className: "bg-black",
  },
  {
    title: "yellow",
    className: "bg-yellow-400",
  },
  {
    title: "green",
    className: "bg-lime-400",
  },
  {
    title: "blue",
    className: "bg-cyan-400",
  },
  {
    title: "red",
    className: "bg-red",
  },
  {
    title: "orange",
    className: "bg-orange-400",
  },
];

const ColorPicker = () => {
  return (
    <div className="flex gap-2">
      {ITEMS.map((item, index) => (
        <div
          key={index}
          className={cn(item.className, "w-7 h-7 rounded-full")}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
