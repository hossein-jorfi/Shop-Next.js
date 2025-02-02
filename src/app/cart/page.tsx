"use client";

import { useProducts } from "@/client-services";
import { ProductType } from "@/definitions";
import { useTotalPrice } from "@/store/hooks";
import FinalBuy from "@/ui/cart/final-buy";
import Products from "@/ui/cart/products";

export const Page = () => {
  const { data, isLoading } = useProducts<ProductType[]>();

  const totalPrice = useTotalPrice(data || []);

  return (
    <div className="pt-5 custom-container content-paddign-x flex flex-row-reverse justify-between gap-4">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="w-[300px] shrink-0">
            <FinalBuy totalPrice={+totalPrice.toFixed()} />
          </div>
          <div className="flex-grow">
            <Products products={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
