import { Separator } from "@/components/ui/separator";
import ProductItem from "./product-item";

export const Products = () => {
  return (
    <div className="flex flex-col gap-2">
      <ProductItem />
      <Separator className="bg-border" />
      <ProductItem />
      <Separator className="bg-border" />
      <ProductItem />
    </div>
  );
};

export default Products;
