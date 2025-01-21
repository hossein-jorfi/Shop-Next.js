import { ProductType } from "@/definitions";
import ProductSingle from "@/ui/product-single";

export default async function Page({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const product_id = (await params).product_id;

  const data = await fetch(`${process.env.BASE_URl}/products/${product_id}`);
  const product: ProductType | undefined = await data.json();

  return <ProductSingle product={product} />;
}
