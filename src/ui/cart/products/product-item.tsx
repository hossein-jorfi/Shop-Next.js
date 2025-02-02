import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ManageButton } from "./manage-button";
import { ProductInfo } from "./product-info";

export const ProductItem = () => {
  return (
    <div className="border flex p-3">
      <div className="flex flex-col justify-start items-center">
        <div className="h-28 w-28">
          <AspectRatio className="flex justify-center items-center">
            <Image
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="product"
              width={60}
              height={60}
            />
          </AspectRatio>
        </div>
        <ManageButton />
      </div>

      <ProductInfo />
    </div>
  );
};

export default ProductItem;
