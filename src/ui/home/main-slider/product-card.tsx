import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-background h-full rounded-xl">
      <AspectRatio>
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          width={20}
          height={20}
        />
      </AspectRatio>
    </div>
  );
};

export default ProductCard;
