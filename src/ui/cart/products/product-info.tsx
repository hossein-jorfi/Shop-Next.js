import { ReactNode } from "react";
import Image from "next/image";
import { ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import ClockImage from "@/assets/shop/clock.png";

export const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-primary/90">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <div className="flex flex-col items-start gap-1">
        <InfoItem text="black">
          <div className="w-4 h-4 rounded-full bg-black" />
        </InfoItem>
        <InfoItem text="One Year Guarantee">
          <ShieldCheck className="h-5 w-5" />
        </InfoItem>
        <InfoItem text="Shop">
          <ShoppingBag className="h-4 w-4" />
        </InfoItem>
        <InfoItem text="Delivery Today">
          <Image src={ClockImage} width={16} alt="Delivery Today" />
        </InfoItem>
        <InfoItem text="Delivery Today Shop Delivery">
          <Truck width={16} className="text-red" />
        </InfoItem>
      </div>

      <p className="font-bold text-xl text-left">
        500
        <span className="text-xs text-primary/70 font-extrabold ml-1">USD</span>
      </p>
    </div>
  );
};

const InfoItem = ({
  children,
  text,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <div className="h-5 w-5 flex justify-center items-center">{children}</div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};
