import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductType } from "@/definitions";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Details = ({ product }: { product: ProductType | undefined }) => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full justify-start">
      <div>
        <AspectRatio className="" ratio={1 / 1}>
          <Image
            src={product?.image || ""}
            alt="product"
            fill
            className="!w-auto object-cover"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <p className="font-bold text-primary/90">{product?.title}</p>
        <p className="font-medium text-sm text-muted-foreground">
          {product?.description}
        </p>
        <div className="text-sm flex flex-col gap-1">
          <Link
            href={`/shop?categories=${product?.category}`}
            className="bg-muted text-primary/70 font-bold w-fit py-1 px-2 rounded-lg"
          >
            {product?.category}
          </Link>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-0.5">
              <Star fill="#f9a825" stroke="#f9a825" width={15} />
              <p className="font-bold">{product?.rating.rate}</p>
            </div>
            <p className="font-bold text-xs text-muted-foreground">
              (Out Of {product?.rating.count} Buyers)
            </p>
          </div>
          <p>{product?.price} USD</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
