import Filters from "@/ui/shop/filters";
import ShopBreadcrumb from "@/ui/shop/shop-breadcrumb";

const Shop = () => {
  return (
    <div className="flex flex-col items-start custom-container content-paddign-x content-paddign-y h-full">
      <ShopBreadcrumb />

      <div className="mt-5 flex gap-3 w-full h-full">
        <Filters />
        <div className="p-3 w-full border h-full">Products</div>
      </div>
    </div>
  );
};

export default Shop;
