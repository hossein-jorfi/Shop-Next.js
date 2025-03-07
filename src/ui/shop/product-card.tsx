import Image from "next/image";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import ColorsPlate from "./colors-plate";
import ClockImage from "@/assets/shop/clock.png";
import Link from "next/link";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col justify-between items-start select-none cursor-pointer relative border p-4 hover:shadow-same"
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-44 h-44 flex justify-center items-center">
          <AspectRatio className="flex justify-center items-center">
            <Image
              src={product.image}
              alt="product"
              width={0}
              height={0}
              sizes="100vw"
              className="w-1/2 h-auto"
            />
          </AspectRatio>
        </div>
      </div>

      <p className="h-[44px] text-sm font-semibold text-primary/90 overflow-hidden">
        {product.title}
      </p>
      <div className="flex justify-between w-full items-start">
        <div>
          <div className="flex items-center gap-[2px]">
            <Star fill="#f9a825" stroke="#f9a825" width={15} />
            <p className="text-[#f9a825] text-xs font-extrabold">
              {product.rating.rate}
            </p>
          </div>
          <p className="text-xs text-left w-full font-bold text">
            {product.price}{" "}
            <span className="text-[11px] font-extrabold text-primary/80">
              USD
            </span>
          </p>
        </div>

        <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
          <p>Special Delivery</p>
          <Image src={ClockImage} alt="Special Delivery" className="w-5" />
        </div>
      </div>

      {/* colors */}
      <ColorsPlate />
    </Link>
  );
};

export default ProductCard;
