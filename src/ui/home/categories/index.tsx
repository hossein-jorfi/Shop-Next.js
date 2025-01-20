import DevicesSVG from "@/assets/common/devices";
import JewelerySVG from "@/assets/common/jewelery";
import MensHoodieSVG from "@/assets/common/mens-hoodie";
import WomensTshirtSVG from "@/assets/common/womens-t-shirt";
import Link from "next/link";

const ITEMS = [
  {
    title: "Electronics",
    href: "/shop?categories=electronics",
    icon: <DevicesSVG />,
  },
  {
    title: "Jewelery",
    href: "/shop?categories=jewelery",
    icon: <JewelerySVG />,
  },
  {
    title: "Mens clothing",
    href: "/shop?categories=men's clothing",
    icon: <MensHoodieSVG />,
  },
  {
    title: "Women's clothing",
    href: "/shop?categories=women's clothing",
    icon: <WomensTshirtSVG />,
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-5 px-5 custom-container md:px-24 lg:px-52">
      {ITEMS.map((item, index) => (
        <Link
          href={item.href}
          className="border h-52 flex justify-center items-center rounded-xl cursor-pointer hover:border-red/70 hover:text-red font-semibold transition-all flex-col gap-2 overflow-hidden p-10"
          key={index}
        >
          {item.icon}
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
