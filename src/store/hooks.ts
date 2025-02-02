import { ProductType } from "@/definitions";
import useCartStore from "./useCartStore";
import { getTotalProductsCount, getTotalProductsPrice } from "./utils";

export const useTotalCount = () => {
  const products = useCartStore((state) => state.products);
  const cartTotalCount = getTotalProductsCount(products);

  return cartTotalCount;
};

export const useTotalPrice = (products: ProductType[]) => {
  const cartTotalPrice = getTotalProductsPrice(products);

  return cartTotalPrice;
};
