import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ManageButton } from "./manage-button";
import { ProductInfo } from "./product-info";
import { ProductType } from "@/definitions";

interface Props {
  product: ProductType | undefined;
}

export const ProductItem = ({ product }: Props) => {
  return (
    <div className="flex gap-2 p-3">
      <div className="flex flex-col items-center justify-between">
        <div className="h-28 w-28 cursor-pointer">
          <AspectRatio className="flex justify-center items-center">
            <Image
              src={product?.image || ""}
              alt="product"
              width={60}
              height={60}
            />
          </AspectRatio>
        </div>
        <ManageButton id={product?.id || 0} />
      </div>

      <ProductInfo product={product} />
    </div>
  );
};

export default ProductItem;
