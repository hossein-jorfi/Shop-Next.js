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

  console.log(products)
  if (sort) {
    console.log(sort);
    dynamicSort(products ,"price");
  }

  return result;
};

const dynamicSort = (arr: ProductType[] | undefined, property: string ) => {
  return arr?.sort(function (a, b) {
    return a[property] - b[property];
  });
};
