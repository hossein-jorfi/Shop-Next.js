import { ProductType } from "@/definitions";

const ProductSingle = ({ product }: { product: ProductType | undefined }) => {
  return <div>{product?.description}</div>;
};

export default ProductSingle;
