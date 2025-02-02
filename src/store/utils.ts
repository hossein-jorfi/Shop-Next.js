import { ProductInCartType } from "./useCartStore";

export const getTotalProductsCount = (products: ProductInCartType[]) => {
  let result = 0;
  products.forEach((product) => {
    result += product.count;
  });

  return result;
};
