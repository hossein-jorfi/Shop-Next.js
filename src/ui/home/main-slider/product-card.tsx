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

      <p className="px-2 h-[44px] text-sm font-semibold text-muted-foreground overflow-hidden">
        {product.title}
      </p>
      <p className="px-2 text-xs text-left w-full font-bold text">
        {product.price} <span className="text-[11px] font-extrabold text-primary/80">USD</span>
      </p>
    </div>
  );
};

export default ProductCard;
