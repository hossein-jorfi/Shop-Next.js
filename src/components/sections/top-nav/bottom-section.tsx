"use client";
import { ReactNode, useState } from "react";

const ITEMS = [
  {
    title: "All Products",
    href: "#",
  },
  {
    title: "Electronics",
    href: "#",
  },
  {
    title: "Jewelery",
    href: "#",
  },
  {
    title: "Mens clothing",
    href: "#",
  },
];

const BottomSection = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="mt-4 flex font-semibold text-sm pb-2">
      {ITEMS.map((item, index) => (
        <CategoryItemWraper key={index}>{item.title}</CategoryItemWraper>
      ))}
    </div>
  );
};

export default BottomSection;

const CategoryItemWraper = ({ children }: { children: ReactNode }) => {
  return <p className="cursor-pointer pr-6 text-primary/70">{children}</p>;
};
