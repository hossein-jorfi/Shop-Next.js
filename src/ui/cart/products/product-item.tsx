import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ManageButton } from "./manage-button";
import { ProductInfo } from "./product-info";
import { ProductType } from "@/definitions";

interface Props {
  product: ProductType | undefined;
}

export const ProductItem = ({ product }: Props) => {
  const renderImage = (
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
  );

  return (
    <div className="flex flex-col md:flex-row gap-2 p-3">
      <div className="flex md:hidden border rounded-lg justify-center items-center">{renderImage}</div>
      <div className="flex flex-col items-center justify-between">
        <div className="hidden md:block">{renderImage}</div>
        <div className="hidden md:block">
          <ManageButton id={product?.id || 0} />
        </div>
      </div>

      <ProductInfo product={product} />

      <div className="block md:hidden w-fit">
        <ManageButton id={product?.id || 0} />
      </div>
    </div>
  );
};

export default ProductItem;
