import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useTotalCount } from "@/store/hooks";
import { VerifyModal } from "./verify-modal";
const itemContainerClass =
  "flex justify-between items-center gap-0.5 text-sm font-semibold";

const FinalBuy = ({ totalPrice }: { totalPrice: number }) => {
  const count = useTotalCount();

  return (
    <Dialog>
      <div className="border rounded-lg p-3 flex flex-col gap-2">
        <div className={cn(itemContainerClass, "text-muted-foreground")}>
          <p>Totla Product</p>
          <p>{count}</p>
        </div>
        <div className={cn(itemContainerClass, "text-primary/90")}>
          <p>Totla Price</p>
          <div className="flex items-baseline gap-0.5">
            <p className="text-base">{totalPrice}</p>
            <span className="text-xs">USD</span>
          </div>
        </div>
        <div className={cn(itemContainerClass, "text-[#36953b]")}>
          <p>Totla Discount</p>
          <div className="flex items-baseline gap-0.5">
            <p className="text-base">{(totalPrice * 0.05).toFixed()}</p>
            <span className="text-xs">USD</span>
            <p className="text-xs">(5%)</p>
          </div>
        </div>
        <DialogTrigger asChild>
          <Button size="lg" className="font-bold text-base w-full">
            Finish Purchase
          </Button>
        </DialogTrigger>
      </div>

      <VerifyModal />
    </Dialog>
  );
};

export default FinalBuy;
