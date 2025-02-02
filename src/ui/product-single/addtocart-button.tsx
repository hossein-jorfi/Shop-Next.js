"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/store/useCartStore";
import { Minus, Plus, Trash2 } from "lucide-react";

const buttonStyles = "hover:text-red";

const AddToCartButton = ({ id }: { id: number | undefined }) => {
  // store states
  const cartProducts = useCartStore((state) => state.products);
  const cartProduct = cartProducts.find((item) => item.id === id);

  // store actions
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  //
  const handleAddProduct = () => {
    addProduct(id || 0);
  };
  const handleremoveProduct = () => {
    removeProduct(id || 0);
  };

  return (
    <div>
      {!cartProduct?.count ? (
        <Button
          onClick={handleAddProduct}
          className="w-full font-bold h-[46px]"
        >
          Add To Card
        </Button>
      ) : (
        <div className="border p-1 flex items-center gap-2 text-red rounded-lg w-fit bg-white shadow-sm">
          <Button
            onClick={handleremoveProduct}
            variant="ghost"
            size="icon"
            className={buttonStyles}
          >
            {cartProduct?.count == 1 ? <Trash2 /> : <Minus />}
          </Button>
          <p className="text-sm font-medium">{cartProduct?.count}</p>
          <Button
            onClick={handleAddProduct}
            variant="ghost"
            size="icon"
            className={buttonStyles}
          >
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
