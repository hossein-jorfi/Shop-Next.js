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
    <div className="pattern h-72 flex justify-center items-center px-5">
      <div className="bg-red h-64 w-full rounded-xl flex items-center justify-center px-5 custom-container">
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-3">
            {products?.map((product) => (
              <CarouselItem
                key={product.id}
                // className="w-36 h-52 basis-1/3 sm:basis-[24%] md:basis-[20%] lg:basis-[13%]"
                className="w-36 h-52"
              >
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
