import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useCartStore from "@/store/useCartStore";

export const VerifyModal = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <DialogContent className="sm:w-96">
      <DialogHeader>
        <DialogTitle>Finish Purchase?</DialogTitle>
        <DialogDescription>
          This action will clear all product you added to your cart
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <div className="w-full flex gap-2 mt-5">
          <DialogClose asChild>
            <Button onClick={() => clearCart()} className="w-full">Yes</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="w-full" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};
