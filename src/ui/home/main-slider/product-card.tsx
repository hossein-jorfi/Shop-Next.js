import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import Image from "next/image";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-background h-52 w-36 rounded-xl overflow-hidden flex flex-col justify-between items-center pb-1 select-none cursor-pointer">
      <AspectRatio className="flex justify-center items-center">
        <Image src={product.image} alt="product" width={70} height={70} />
      </AspectRatio>
      <p className="px-1 text-sm font-semibold text-primary/70 overflow-hidden">{product.title}</p>
      <p className="text-xs text-left w-full px-2 font-bold text">
        {product.price} <span>USD</span>
      </p>
    </div>
  );
};

export default ProductCard;
