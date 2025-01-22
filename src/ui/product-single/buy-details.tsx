import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

interface Props {
  price: number;
}

const BuyDetails = ({ price }: Props) => {
  return (
    <div className="border rounded-lg p-3 bg-muted !w-[500px] text-left flex flex-col gap-4">
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
        <Button className="w-full font-bold">Add To Card</Button>
        <div className="flex gap-2 font-medium text-primary/90">
            <ShieldCheck />
            <p>One Year Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default BuyDetails;
