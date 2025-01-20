import { ProductType } from "@/definitions";

export const filterProducts = (
  products: ProductType[] | undefined,
  category: string
) => {
  if (!category) {
    return products;
  }
  const result =
    products?.filter(
      (product) => product?.category?.toLowerCase() === category?.toLowerCase()
    ) || [];
  return result;
};
