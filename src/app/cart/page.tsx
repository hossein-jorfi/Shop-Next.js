import FinalBuy from "@/ui/cart/final-buy";
import Products from "@/ui/cart/products";

export const Page = () => {
  return (
    <div className="pt-5 custom-container content-paddign-x flex">
      <Products />
      <FinalBuy />
    </div>
  );
};

export default Page;
