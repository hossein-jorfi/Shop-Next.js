import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const itemContainerClass =
  "flex justify-between items-center gap-0.5 text-sm font-semibold";

const FinalBuy = () => {
  return (
    <div className="border rounded-lg p-3 flex flex-col gap-2">
      <div className={cn(itemContainerClass, "text-muted-foreground")}>
        <p>Totla Product</p>
        <p>10</p>
      </div>
      <div className={cn(itemContainerClass, "text-primary/90")}>
        <p>Totla Price</p>
        <div className="flex items-baseline gap-0.5">
          <p className="text-base">283</p>
          <span className="text-xs">USD</span>
        </div>
      </div>
      <div className={cn(itemContainerClass, "text-[#36953b]")}>
        <p>Totla Discount</p>
        <div className="flex items-baseline gap-0.5">
          <p className="text-base">57</p>
          <span className="text-xs">USD</span>
          <p className="text-xs">(5%)</p>
        </div>
      </div>
      <Button size="lg" className="font-bold text-base">
        Finish Purchase
      </Button>
    </div>
  );
};

export default FinalBuy;
