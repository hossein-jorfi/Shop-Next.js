import { ProductType } from "@/definitions";
import Products from "./products";

export default async function MainSlider() {
  const data = await fetch(`${process.env.BASE_URl}/products`);
  const products: ProductType[] | undefined = await data.json();

  return <Products products={products} />;
}
