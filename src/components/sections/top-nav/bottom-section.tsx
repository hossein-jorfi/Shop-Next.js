"use client";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

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
  const [hovered, setHovered] = useState(1);

  return (
    <div className="mt-4 flex font-semibold text-sm pb-2">
      {ITEMS.map((item, index) => (
        <CategoryItemWraper key={index} title={item.title}>
          {index === hovered && (
            <motion.div
              className="w-full h-[3px] rounded absolute -bottom-1"
              style={{ backgroundColor: "red" }}
            />
          )}
        </CategoryItemWraper>
      ))}
    </div>
  );
};

export default BottomSection;

const CategoryItemWraper = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="relative">
      <p className="cursor-pointer text-primary/70">{title}</p>
      {children}
    </div>
  );
};
