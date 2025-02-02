import { ProductType } from "@/definitions";
import { ProductInCartType } from "./useCartStore";

export const getTotalProductsCount = (products: ProductInCartType[]) => {
  let result = 0;
  products.forEach((product) => {
    result += product.count;
  });

  return result;
};

export const getTotalProductsPrice = (products: ProductType[]) => {
  let result = 0;
  products.forEach((product) => {
    result += product.price;
  });

  return result;
};
