import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { ProductType } from "@/definitions";

type Props = {
  products: ProductType[] | undefined;
};

function Products({ products }: Props) {
  return (
    <div className="pattern h-64 flex justify-center items-center px-5">
      <div className="bg-red h-56 w-full rounded-xl flex items-center justify-center px-5">
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products?.map((product) => (
              <CarouselItem key={product.id} className="h-48 basis-[13%]">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    </div>
  );
}

export default Products;
