import { ProductType } from "@/definitions";
import Filters from "@/ui/shop/filters";
import Products from "@/ui/shop/products";
import ShopBreadcrumb from "@/ui/shop/shop-breadcrumb";

const Shop = async () => {
  const data = await fetch(`${process.env.BASE_URl}/products`);
  const products: ProductType[] | undefined = await data.json();

  return (
    <div className="flex flex-col items-start custom-container content-paddign-x content-paddign-y h-full">
      <ShopBreadcrumb />

      <div className="mt-5 flex gap-3 w-full h-full">
        <Filters />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
