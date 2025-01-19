import ShopBreadcrumb from "@/ui/shop/shop-breadcrumb";

const Shop = () => {
  return (
    <div className="flex flex-col items-start custom-container content-paddign-x content-paddign-y h-full">
      <ShopBreadcrumb />

      <div className="mt-5 flex divide-x border w-full h-full">
        <div className="p-3 w-80 h-full">Filters</div>
        <div className="p-3 w-full h-full">Products</div>
      </div>
    </div>
  );
};

export default Shop;
