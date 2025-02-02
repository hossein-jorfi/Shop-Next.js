import ProductItem from "./product-item";

export const Products = () => {
  return (
    <div className="flex flex-col gap-2">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default Products;
