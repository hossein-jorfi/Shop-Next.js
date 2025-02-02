import { ProductType } from "@/definitions";
import useCartStore from "./useCartStore";
import { getTotalProductsCount, getTotalProductsPrice } from "./utils";

export const useTotalCount = () => {
  const products = useCartStore((state) => state.products);
  const cartTotalCount = getTotalProductsCount(products);

  return cartTotalCount;
};

export const useTotalPrice = (products: ProductType[]) => {
  const cartProducts = useCartStore((state) => state.products);
  const cartTotalPrice = getTotalProductsPrice(products, cartProducts);

  return cartTotalPrice;
};
