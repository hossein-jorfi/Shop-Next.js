import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
        <p className="font-bold text-xl">
          {price}{" "}
          <span className="text-xs text-primary/70 font-extrabold">USD</span>
        </p>
        <Button className="w-full font-bold">Add To Card</Button>
      </div>
    </div>
  );
};

export default BuyDetails;
