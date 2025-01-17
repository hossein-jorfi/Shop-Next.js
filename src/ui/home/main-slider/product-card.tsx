import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-background h-full rounded-xl overflow-hidden flex flex-col justify-between items-center">
      <AspectRatio className="flex justify-center items-center">
        <Image
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          width={70}
          height={70}
        />
      </AspectRatio>

      <p className="px-1 text-sm overflow-hidden">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
      </p>
      <p className="text-xs text-left w-full px-2">
        300 <span>USD</span>
      </p>
    </div>
  );
};

export default ProductCard;
