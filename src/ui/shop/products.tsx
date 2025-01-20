import { ProductType } from "@/definitions";

type Props = {
  products: ProductType[] | undefined;
};

const Products = ({ products }: Props) => {

  return (
    <div className="p-3 w-full border h-full">
      <p>Products</p>
    </div>
  );
};

export default Products;
