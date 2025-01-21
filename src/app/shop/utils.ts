import { ProductType } from "@/definitions";

export const filterProducts = (
  products: ProductType[] | undefined,
  category: string | null,
  sort: string | null
) => {
  let result =
    products?.filter(
      (product) => product?.category?.toLowerCase() === category?.toLowerCase()
    ) || [];
  if (!category) {
    result = products || [];
  }

  if (sort) {
    if (sort == "price") {
      result = result
        .toSorted((a, b) => {
          return a.price - b.price;
        })
        .reverse();
    }
    if (sort == "-price") {
      result = result.toSorted((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort == "rate") {
      result = result
        .toSorted((a, b) => {
          return a.rating.rate - b.rating.rate;
        })
        .reverse();
    }
    if (sort == "count") {
      result = result
        .toSorted((a, b) => {
          return a.rating.count - b.rating.count;
        })
        .reverse();
    }
  }

  return result;
};
