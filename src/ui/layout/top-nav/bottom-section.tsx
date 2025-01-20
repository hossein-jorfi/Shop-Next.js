import Link from "next/link";

const ITEMS = [
  {
    title: "All Products",
    href: "/shop",
  },
  {
    title: "Electronics",
    href: "/shop?categories=electronics",
  },
  {
    title: "Jewelery",
    href: "/shop?categories=jewelery",
  },
  {
    title: "Mens clothing",
    href: "/shop?categories=men's clothing",
  },
  {
    title: "Women's clothing",
    href: "/shop?categories=women's clothing",
  },
];

const BottomSection = () => {
  return (
    <div className="mt-4 hidden sm:flex font-semibold text-sm pb-2 space-x-4">
      {ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative group cursor-pointer"
        >
          <p className="text-muted-foreground '  clothingtransition-all">
            {item.title}
          </p>
          <div className="h-[2px] rounded absolute -bottom-2 w-0 group-hover:!w-full bg-red transition-all ease-out duration-300" />
        </Link>
      ))}
    </div>
  );
};

export default BottomSection;
