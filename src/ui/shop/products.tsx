import { ProductType } from "@/definitions";
import ProductCard from "./product-card";

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {
  console.log(products)
  return (
    <div className="w-full h-full grid grid-cols-3 gap-3">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
