import guarantee from "@/assets/footer/guarantee.svg";
import cash_on_delivery from "@/assets/footer/cash-on-delivery.svg";
import days_return from "@/assets/footer/days-return.svg";
import express_delivery from "@/assets/footer/express-delivery.svg";
import support from "@/assets/footer/support.svg";
import Image from "next/image";

const ITEMS = [
  {
    title: "Guarantee",
    icon: guarantee,
  },
  {
    title: "7 Days Return",
    icon: days_return,
  },
  {
    title: "24 hours a day, 7 days a week",
    icon: support,
  },
  {
    title: "Cash On Delivery",
    icon: cash_on_delivery,
  },
  {
    title: "Special Delivery",
    icon: express_delivery,
  },
];

const Options = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 text-xs text-muted-foreground">
      {ITEMS.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image src={item.icon} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;
