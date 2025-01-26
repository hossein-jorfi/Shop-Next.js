"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const [selected, setSelected] = useState(ITEMS[0].title);

  return (
    <div className="flex gap-2">
      {ITEMS.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(item.title)}
          className={cn(
            "rounded-full p-0.5 cursor-pointer",
            selected === item.title &&
              "outline outline-2 outline-blue-400"
          )}
        >
          <div
            className={cn(item.className, "w-7 h-7 rounded-full p-3")}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
