import { Separator } from "@/components/ui/separator";
import ClockImage from "@/assets/shop/clock.png";
import CoinImage from "@/assets/shop/coin.svg";
import { Truck, Info, ShieldCheck } from "lucide-react";
import Image from "next/image";
import AddToCartButton from "./addtocart-button";

interface Props {
  price: number;
  id: number | undefined;
}

const BuyDetails = ({ price, id }: Props) => {
  return (
    <div className="border rounded-lg p-3 bg-muted !w-[500px] h-fit text-left flex flex-col gap-4">
      <div>
        <p className="font-bold text-lg">Seller</p>
        <p className="text-primary/80 font-medium">Shop</p>
        <p className="text-sm font-medium text-muted-foreground flex gap-1">
          Performance <span className="text-[#00a049] font-bold">Great</span>
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-sm px-1 rounded-xl bg-red text-white font-bold">
              5<span className="text-xs font-extrabold">%</span>
            </p>
            <p className="text-xs text-muted-foreground/70 font-bold line-through">
              {(price + price * 0.1).toFixed(3)}
            </p>
          </div>
          <p className="font-bold text-xl">
            {price}{" "}
            <span className="text-xs text-primary/70 font-extrabold">USD</span>
          </p>
        </div>
        <AddToCartButton id={id} />
        <div className="flex gap-2 font-medium text-primary/90">
          <ShieldCheck />
          <p>One Year Guarantee</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col text-sm text-muted-foreground font-medium">
        <div className="flex items-center gap-1">
          <Image src={ClockImage} width={16} alt="Delivery Today" />
          <p>Delivery Today</p>
        </div>
        <div className="flex items-center gap-1">
          <Truck width={16} className="text-red" />
          <p>Shop Delivery</p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-1 text-sm text-primary/90 font-medium">
        <Image src={CoinImage} width={26} alt="Delivery Today" />
        <p>150 point in shop club</p>
        <Info width={16} className="text-muted-foreground ml-1" />
      </div>
    </div>
  );
};

export default BuyDetails;
