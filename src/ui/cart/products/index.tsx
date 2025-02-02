import { Separator } from "@/components/ui/separator";
import ProductItem from "./product-item";
import { ProductType } from "@/definitions";
import React from "react";

interface Props {
  products: ProductType[] | undefined;
}

export const Products = ({ products }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {products?.map((product) => (
        <React.Fragment key={product.id}>
          <ProductItem product={product} />
          <Separator className="bg-border" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Products;
