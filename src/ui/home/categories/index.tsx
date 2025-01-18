import DevicesSVG from "@/assets/common/devices";
import JewelerySVG from "@/assets/common/jewelery";
import MensHoodieSVG from "@/assets/common/mens-hoodie";
import WomensTshirtSVG from "@/assets/common/womens-t-shirt";

const ITEMS = [
  {
    title: "Electronics",
    href: "#",
    icon: <DevicesSVG />,
  },
  {
    title: "Jewelery",
    href: "#",
    icon: <JewelerySVG />,
  },
  {
    title: "Mens clothing",
    href: "#",
    icon: <MensHoodieSVG />,
  },
  {
    title: "Women's clothing",
    href: "#",
    icon: <WomensTshirtSVG />,
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 mt-5 px-5 custom-container md:px-24 lg:px-52">
      {ITEMS.map((item, index) => (
        <div
          className="border h-52 flex justify-center items-center rounded-xl cursor-pointer hover:border-red/70 hover:text-red font-semibold transition-all flex-col gap-2 overflow-hidden p-10"
          key={index}
        >
          {item.icon}
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
