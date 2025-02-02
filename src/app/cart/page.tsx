"use client";

import { useProducts } from "@/client-services";
import { ProductType } from "@/definitions";
import { useTotalCount, useTotalPrice } from "@/store/hooks";
import CartLoading from "@/ui/cart/cart-loading";
import FinalBuy from "@/ui/cart/final-buy";
import Products from "@/ui/cart/products";

const Page = () => {
  // const { data, isLoading } = useProducts<ProductType[]>();
  // const totalCount = useTotalCount();
  // const totalPrice = useTotalPrice(data || []);

  return (
    <div className="pt-5 custom-container content-paddign-x flex flex-row-reverse justify-between gap-4">
      <CartLoading />
      {/* {totalCount == 0 ? (
        <div className="flex-grow">
          <Products products={[]} />
        </div>
      ) : isLoading ? (
        <CartLoading />
      ) : (
        <>
          <div className="w-[300px] shrink-0">
            <FinalBuy totalPrice={+totalPrice.toFixed(2)} />
          </div>
          <div className="flex-grow">
            <Products products={data} />
          </div>
        </>
      )} */}
    </div>
  );
};

export default Page;
