import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="pt-5 custom-container content-paddign-x">
      <Skeleton className="w-60 h-5" />

      <div className="custom-container p-5 border rounded-lg my-3 flex flex-col md:flex-row gap-5">
        <Details />
        <Skeleton className="w-full md:!w-[350px] lg:!w-[400px] h-96" />
      </div>
    </div>
  );
};

export default ProductSkeleton;

const Details = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full justify-start">
      <div>
        <Skeleton className="w-full h-96" />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <Skeleton className="w-full h-7" />
        <Skeleton className="w-full h-7" />
        <div className="text-sm flex flex-col gap-2">
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
          <Skeleton className="w-2/3 h-5" />
        </div>
      </div>
    </div>
  );
};
