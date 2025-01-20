import { ProductType } from "@/definitions";
import ProductCard from "./product-card";

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {
  return (
    <div className="p-3 w-full border-t border-b divide-x h-full grid grid-cols-3">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
