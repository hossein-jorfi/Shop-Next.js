import { Separator } from "@/components/ui/separator";
import ProductItem from "./product-item";
import { ProductType } from "@/definitions";
import React from "react";
import useCartStore from "@/store/useCartStore";

interface Props {
  products: ProductType[] | undefined;
}

export const Products = ({ products }: Props) => {
  const cartProductsIds = useCartStore((state) => state.products).map(
    (i) => i.id
  );

  const filtredProducts = products?.filter((item) =>
    cartProductsIds?.includes(item.id)
  );

  return (
    <div className="flex flex-col gap-2">
      {filtredProducts?.map((product) => (
        <React.Fragment key={product.id}>
          <ProductItem product={product} />
          <Separator className="bg-border" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Products;
