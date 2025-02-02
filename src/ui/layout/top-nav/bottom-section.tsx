"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
  const pathname = usePathname();
  const categories = searchParams.get("categories");

  return (
    <div className="mt-4 font-semibold text-sm pb-0 sm:pb-2">
      <div className="hidden sm:flex gap-4">
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
                  pathname === "/shop" &&
                  "text-primary"
              )}
            >
              {item.title}
            </p>
            <div
              className={cn(
                "h-[2px] rounded absolute -bottom-2 w-0 group-hover:!w-full bg-red transition-all ease-out duration-300",
                categories?.toLowerCase() === item?.key?.toLowerCase() &&
                  pathname === "/shop" &&
                  "w-full"
              )}
            />
          </Link>
        ))}
      </div>
      <div className="flex sm:hidden">
        <Button variant='ghost' className="p-0 m-0 w-fit h-fit">
          <Menu />
          Categories
        </Button>
      </div>
    </div>
  );
};

export default BottomSection;
