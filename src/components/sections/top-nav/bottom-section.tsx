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
  const [hovered, setHovered] = useState(-1);

  return (
    <div className="mt-4 flex font-semibold text-sm pb-2 space-x-4">
      {ITEMS.map((item, index) => (
        <CategoryItemWraper
          key={index}
          title={item.title}
          setIsHovered={(value) => {
            if (value) {
              setHovered(index)
            } else setHovered(-1)
          }}
        >
          {index === hovered && (
            <motion.div
              className="w-full h-[2px] rounded absolute -bottom-2 bg-red"
              transition={{ duration: 0.5 }}
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
  setIsHovered,
}: {
  title: string;
  setIsHovered: (value: boolean) => void;
  children: ReactNode;
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="cursor-pointer text-primary/70">{title}</p>
      {children}
    </div>
  );
};
