import { ProductType } from "@/definitions";
import { ProductInCartType } from "./useCartStore";

export const getTotalProductsCount = (products: ProductInCartType[]) => {
  let result = 0;
  products.forEach((product) => {
    result += product.count;
  });

  return result;
};

export const getTotalProductsPrice = (
  products: ProductType[],
  cartProducts: ProductInCartType[]
) => {
  const cartIds = cartProducts.map((i) => i.id);
  let result = 0;
  products.forEach((product) => {
    if (cartIds.includes(product.id)) {
      const currentProductCount =
        cartProducts.find((i) => i?.id == product.id)?.count || 0;
      result += product.price * currentProductCount;
    }
  });

  return result;
};
