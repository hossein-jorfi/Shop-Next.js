import { Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/useCartStore";

const buttonStyles = "hover:text-red";

export const ManageButton = ({ id }: { id: number }) => {
  const productCount = useCartStore((state) => state.products)?.find(
    (i) => i.id === id
  )?.count;

  return (
    <div className="border p-1 flex items-center gap-2 text-red rounded-lg">
      <Button variant="ghost" size="icon" className={buttonStyles}>
        <Trash2 />
      </Button>
      <p className="text-sm font-medium">{productCount}</p>
      <Button variant="ghost" size="icon" className={buttonStyles}>
        <Plus />
      </Button>
    </div>
  );
};
