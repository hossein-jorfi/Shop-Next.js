import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        // loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="h-48 basis-[13%]">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

export default Products;
