"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/store/useCartStore";
import { Plus, Trash2 } from "lucide-react";

const buttonStyles = "hover:text-red";

const AddToCartButton = ({ id }: { id: number | undefined }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const handleAddProduct = () => {
    addProduct(id || 0);
  };

  return (
    <div>
      <Button onClick={handleAddProduct} className="w-full font-bold">
        Add To Card
      </Button>

      <div className="border p-1 flex items-center gap-2 text-red rounded-lg w-fit bg-white shadow-sm">
        <Button variant="ghost" size="icon" className={buttonStyles}>
          <Trash2 />
        </Button>
        <p className="text-sm font-medium">1</p>
        <Button
          onClick={handleAddProduct}
          variant="ghost"
          size="icon"
          className={buttonStyles}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;
