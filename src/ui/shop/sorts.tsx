"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const ITEMS = [
  {
    title: "Most Popular",
    key: "rate",
  },
  {
    title: "Most Sold",
    key: "count",
  },
  {
    title: "Most Expensive",
    key: "price",
  },
  {
    title: "Most Cheap",
    key: "-price",
  },
];

const Sorts = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories");
  const sort = searchParams.get("sort");

  const generateHref = (key: string) => {
    const newHref = `${pathname}?sort=${key}${
      categories ? `&categories=${categories}` : ""
    }`;
    return newHref;
  };

  const handleClear = () => {
    const newHref = `${pathname}${
      categories ? `?categories=${categories}` : ""
    }`;

    router.push(newHref);
  };

  return (
    <div className="p-3 w-80 border rounded-lg h-80 flex flex-col items-start">
      <div className="flex justify-between w-full items-center">
        <p className="font-semibold text-primary/90">Sort</p>
        <Button
          variant="ghost"
          className="text-custom-blue font-bold hover:text-custom-blue hover:bg-custom-blue/10"
          size="sm"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      <div className="flex flex-col items-start gap-2 mt-2 w-full">
        {ITEMS.map((item, index) => (
          <Link
            key={index}
            href={generateHref(item.key)}
            className="w-full text-left text-sm font-semibold"
          >
            <Button
              variant={
                item.key?.toLowerCase() === sort?.toLowerCase()
                  ? "default"
                  : "outline"
              }
              className={cn(
                "w-full text-sm font-semibold transition-all",
                item.key?.toLowerCase() === sort?.toLowerCase() &&
                  "bg-custom-blue hover:bg-custom-blue"
              )}
            >
              <p>{item.title}</p>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sorts;
