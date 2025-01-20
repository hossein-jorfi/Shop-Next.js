"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    title: "All Products",
    href: "/shop",
    key: null,
  },
  {
    title: "Electronics",
    href: "/shop?categories=electronics",
    key: "electronics",
  },
  {
    title: "Jewelery",
    href: "/shop?categories=jewelery",
    key: "jewelery",
  },
  {
    title: "Mens clothing",
    href: "/shop?categories=men's clothing",
    key: "men's clothing",
  },
  {
    title: "Women's clothing",
    href: "/shop?categories=women's clothing",
    key: "women's clothing",
  },
];

const BottomSection = () => {
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories");

  return (
    <div className="mt-4 hidden sm:flex font-semibold text-sm pb-2 space-x-4">
      {ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative group cursor-pointer"
        >
          <p
            className={cn(
              "text-muted-foreground hover:text-primary transition-all",
              categories?.toLowerCase() === item?.key?.toLowerCase() &&
                "text-primary"
            )}
          >
            {item.title}
          </p>
          <div
            className={cn(
              "h-[2px] rounded absolute -bottom-2 w-0 group-hover:!w-full bg-red transition-all ease-out duration-300",
              categories?.toLowerCase() === item?.key?.toLowerCase() &&
                "w-full"
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default BottomSection;
