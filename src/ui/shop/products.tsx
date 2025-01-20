import { ProductType } from "@/definitions";
import ProductCard from "./product-card";
import './styles.css'

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {
  return (
    <div className="w-full h-full grid grid-cols-3 product-grid">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
