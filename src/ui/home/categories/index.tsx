import DevicesVector from "@/assets/common/devices.svg";
import JeweleryVector from "@/assets/common/jewelery.svg";
import MensVector from "@/assets/common/mens-hoodie.svg";
import WomensVector from "@/assets/common/womens-t-shirt.svg";
import Image from "next/image";

const ITEMS = [
  {
    title: "Electronics",
    href: "#",
    icon: DevicesVector,
  },
  {
    title: "Jewelery",
    href: "#",
    icon: JeweleryVector,
  },
  {
    title: "Mens clothing",
    href: "#",
    icon: MensVector,
  },
  {
    title: "Women's clothing",
    href: "#",
    icon: WomensVector,
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 mt-5 px-5 custom-container">
      {ITEMS.map((item, index) => (
        <div
          className="border h-52 flex justify-center items-center rounded-xl text-red cursor-pointer hover:border-red/70 transition-all"
          key={index}
        >
          {item.title}
          <Image src={item.icon} alt={item.title} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
