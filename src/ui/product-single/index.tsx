import { ProductType } from "@/definitions";
import Image from "next/image";
import Link from "next/link";

const ProductSingle = ({ product }: { product: ProductType | undefined }) => {
  return (
    <div className="pt-5 custom-container content-paddign-x">
      <div className="custom-container p-5 border rounded-lg">
        <div className="flex gap-3">
          <Image
            src={product?.image || ""}
            alt="product"
            width={0}
            height={0}
            sizes="100vw"
            className="w-56"
          />
          <div className="flex flex-col gap-2 text-left">
            <p className="font-bold text-primary/90">{product?.title}</p>
            <p className="font-medium text-sm text-muted-foreground">
              {product?.description}
            </p>
            <div className="text-sm">
              <Link
                href={`/shop?categories=${product?.category}`}
                className="bg-muted text-primary/70 font-bold w-fit p-1 rounded-lg"
              >
                {product?.category}
              </Link>
              <p>{product?.price}</p>
              <p>{product?.rating.rate}</p>
              <p>{product?.rating.count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
