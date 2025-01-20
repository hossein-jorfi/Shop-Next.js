'use client';

import { ProductType } from "@/definitions";
import ProductCard from "./product-card";
import { useSearchParams } from "next/navigation";

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {
  const searchParams = useSearchParams()
  const categories = searchParams.get('categories')

  return (
    <div className="w-full h-full grid grid-cols-3 gap-3">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
