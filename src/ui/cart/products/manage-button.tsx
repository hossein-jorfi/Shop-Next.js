import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/useCartStore";

const buttonStyles = "hover:text-red";

export const ManageButton = ({ id }: { id: number }) => {
  const productCount = useCartStore((state) => state.products)?.find(
    (i) => i.id === id
  )?.count;

  // store actions
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <div className="border p-1 flex items-center gap-2 text-red rounded-lg">
      <Button
        onClick={() => removeProduct(id)}
        variant="ghost"
        size="icon"
        className={buttonStyles}
      >
        {productCount == 1 ? <Trash2 /> : <Minus />}
      </Button>
      <p className="text-sm font-medium">{productCount}</p>
      <Button
        onClick={() => addProduct(id)}
        variant="ghost"
        size="icon"
        className={buttonStyles}
      >
        <Plus />
      </Button>
    </div>
  );
};
