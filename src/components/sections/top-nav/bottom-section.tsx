import { ReactNode } from "react";

const BottomSection = () => {
  return (
    <div className="mt-2 flex font-semibold text-sm text-primary/80 pb-2">
      <CategoryItemWraper>All Products</CategoryItemWraper>
      <CategoryItemWraper>Electronics</CategoryItemWraper>
      <CategoryItemWraper>Jewelery</CategoryItemWraper>
      <CategoryItemWraper>Mens clothing</CategoryItemWraper>
    </div>
  );
};

export default BottomSection;

const CategoryItemWraper = ({ children }: { children: ReactNode }) => {
  return <p className="hover:border-b-2 border-red cursor-pointer pr-6">{children}</p>;
};
