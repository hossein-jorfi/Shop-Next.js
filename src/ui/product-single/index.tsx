import { ProductType } from "@/definitions";
import ProductBreadcrumb from "./product-breadcrumb";
import Details from "./details";
import BuyDetails from "./buy-details";

const ProductSingle = ({ product }: { product: ProductType | undefined }) => {
  return (
    <div className="pt-5 custom-container content-paddign-x">
      <ProductBreadcrumb />

      <div className="custom-container p-5 border rounded-lg my-3 flex flex-col md:flex-row gap-5">
        <Details product={product} />
        <BuyDetails price={product?.price || 0} id={product?.id} />
      </div>
    </div>
  );
};

export default ProductSingle;
