import FinalBuy from "@/ui/cart/final-buy";
import Products from "@/ui/cart/products";

export const Page = () => {
  return (
    <div className="pt-5 custom-container content-paddign-x flex flex-row-reverse justify-between gap-4">
      <div className="w-[300px] shrink-0">
        <FinalBuy />
      </div>
      <div className="flex-grow">
        <Products />
      </div>
    </div>
  );
};

export default Page;
