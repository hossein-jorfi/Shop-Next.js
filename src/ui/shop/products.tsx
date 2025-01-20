'use client';

import { useSearchParams } from "next/navigation";
import { ProductType } from "@/definitions";
import ProductCard from "./product-card";
import { filterProducts } from "@/app/shop/utils";

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {
  const searchParams = useSearchParams()
  const categories = searchParams.get('categories')

  return (
    <div className="w-full h-full grid grid-cols-3 gap-3">
      {filterProducts(products, categories)?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
