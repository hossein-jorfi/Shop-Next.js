import React from "react";
import ProductItem from "./product-item";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import EmptyCartSVG from "@/assets/cart/empty-cart.svg";
import { ProductType } from "@/definitions";
import Link from "next/link";

interface Props {
  products: ProductType[] | undefined;
}

export const Products = ({ products }: Props) => {
  const cartProductsIds = useCartStore((state) => state.products).map(
    (i) => i.id
  );

  const filtredProducts = products?.filter((item) =>
    cartProductsIds?.includes(item.id)
  );

  return (
    <div className="flex flex-col gap-2">
      {filtredProducts?.map((product) => (
        <React.Fragment key={product.id}>
          <ProductItem product={product} />
          <Separator className="bg-border" />
        </React.Fragment>
      ))}
      {filtredProducts?.length == 0 && (
        <div className="flex flex-col justify-center items-center h-96 gap-1">
          <Image src={EmptyCartSVG} alt="empty_cart" />
          <p className="font-medium text-primary/90">Your cart is empty !</p>
          <p className="text-sm text-muted-foreground font-medium">
            You can go to <Link className="underline hover:text-blue-600" href="/shop">this page</Link> to see the
            products
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
