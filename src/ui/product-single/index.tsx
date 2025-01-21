import { ProductType } from "@/definitions";

const ProductSingle = ({ product }: { product: ProductType | undefined }) => {
  return (
    <div className="pt-5 border custom-container">
      <p>{product?.title}</p>
      <p>{product?.description}</p>
      <p>{product?.category}</p>
      <p>{product?.image}</p>
      <p>{product?.price}</p>
      <p>{product?.rating.rate}</p>
      <p>{product?.rating.count}</p>
    </div>
  );
};

export default ProductSingle;
