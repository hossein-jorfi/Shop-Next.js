import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import { Star } from "lucide-react";
import Link from "next/link";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className="bg-background h-52 w-36 rounded-xl overflow-hidden flex flex-col justify-between items-center pb-1 select-none cursor-pointer relative">
      <AspectRatio className="flex justify-center items-center">
        <Image src={product.image} alt="product" width={70} height={70} />
      </AspectRatio>

      <p className="px-2 h-[44px] text-sm font-semibold text-muted-foreground overflow-hidden">
        {product.title}
      </p>
      <p className="px-2 text-xs text-left w-full font-bold text">
        {product.price} <span className="text-[11px] font-extrabold text-primary/80">USD</span>
      </p>

      <div className="absolute top-1 left-1 flex items-center gap-[2px]">
        <Star fill="#f9a825" stroke="#f9a825" width={15} />
        <p className="text-[#f9a825] text-xs font-extrabold">{product.rating.rate}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
