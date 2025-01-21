export default async function Page({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const product_id = (await params).product_id;
  return <div>Product: {product_id}</div>;
}
