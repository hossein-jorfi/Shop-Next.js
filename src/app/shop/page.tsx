import { ProductType } from "@/definitions";
import Sorts from "@/ui/shop/sorts";
import Products from "@/ui/shop/products";
import ShopBreadcrumb from "@/ui/shop/shop-breadcrumb";
import { Suspense } from "react";

const Shop = async () => {
  const data = await fetch(`${process.env.BASE_URl}/products`);
  const products: ProductType[] | undefined = await data.json();

  return (
    <div className="flex flex-col items-start custom-container content-paddign-x content-paddign-y h-full">
      <Suspense>
        <ShopBreadcrumb />
      </Suspense>

      <div className="mt-5 flex gap-3 w-full h-full">
        <Suspense>
          <Sorts />
        </Suspense>

        <Suspense>
          <Products products={products} />
        </Suspense>
      </div>
    </div>
  );
};

export default Shop;
