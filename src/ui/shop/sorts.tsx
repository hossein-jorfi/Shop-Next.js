"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const ITEMS = [
  {
    title: "Most Popular",
    key: "popular",
  },
  {
    title: "Most Sold",
    key: "sold",
  },
  {
    title: "Most Expensive",
    key: "expensive",
  },
  {
    title: "Most Cheap",
    key: "cheap",
  },
];

const Sorts = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories");
  // const sort = searchParams.get("sort");

  const generateHref = (key: string) => {
    const newHref = `${pathname}?sort=${key}${
      categories ? `&categories=${categories}` : ""
    }`;
    return newHref;
  };

  return (
    <div className="p-3 w-80 border rounded-lg h-80 flex flex-col items-start">
      <div className="flex justify-between w-full items-center">
        <p className="font-semibold text-primary/90">Sort</p>
        <Button
          variant="ghost"
          className="text-custom-blue font-bold hover:text-custom-blue hover:bg-custom-blue/10"
          size="sm"
        >
          Clear
        </Button>
      </div>
      <div className="flex flex-col items-start gap-2 mt-2 w-full">
        {ITEMS.map((item, index) => (
          <Link
            href={generateHref(item.key)}
            key={index}
            className="border p-2 w-full text-left text-sm font-semibold text-muted-foreground rounded-md hover:bg-muted cursor-pointer"
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sorts;
