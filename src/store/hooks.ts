import useCartStore from "./useCartStore";
import { getTotalProductsCount } from "./utils";

export const useTotalCount = () => {
  const products = useCartStore((state) => state.products);
  const cartTotalCount = getTotalProductsCount(products);

  return cartTotalCount;
};
