import { Separator } from "@/components/ui/separator";
import ProductItem from "./product-item";
import { ProductType } from "@/definitions";

interface Props {
  products: ProductType[] | undefined;
}

export const Products = ({ products }: Props) => {
  console.log(products)

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
