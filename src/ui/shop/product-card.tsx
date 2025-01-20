import Image from "next/image";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import express_delivery from "@/assets/footer/express-delivery.svg";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col justify-between items-start select-none cursor-pointer relative product-grid-item before:bg-border after:bg-border ">
      <AspectRatio className="flex justify-center items-center">
        <Image
          src={product.image}
          alt="product"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
        />
      </AspectRatio>

      <p className="h-[44px] text-sm font-semibold text-muted-foreground overflow-hidden">
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
          <Image src={express_delivery} alt="Special Delivery" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
