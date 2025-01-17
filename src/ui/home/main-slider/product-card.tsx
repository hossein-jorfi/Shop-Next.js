import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import Image from "next/image";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-background h-full rounded-xl overflow-hidden flex flex-col justify-between items-center">
      <AspectRatio className="flex justify-center items-center">
        <Image src={product.image} alt="product" width={70} height={70} />
      </AspectRatio>

      <p className="px-1 text-sm overflow-hidden">{product.title}</p>
      <p className="text-xs text-left w-full px-2">
        {product.price} <span>USD</span>
      </p>
    </div>
  );
};

export default ProductCard;
