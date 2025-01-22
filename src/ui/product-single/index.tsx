import { ProductType } from "@/definitions";
import ProductBreadcrumb from "./product-breadcrumb";
import Details from "./details";

const ProductSingle = ({ product }: { product: ProductType | undefined }) => {
  return (
    <div className="pt-5 custom-container content-paddign-x">
      <ProductBreadcrumb />

      <div className="custom-container p-5 border rounded-lg my-3">
        <Details product={product} />
      </div>
    </div>
  );
};

export default ProductSingle;
