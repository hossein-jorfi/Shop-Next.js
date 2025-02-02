import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CartLoading = () => {
  return (
    <>
      <div className="w-[300px] shrink-0">
        <div className="border rounded-lg p-3 flex flex-col gap-2">
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <Skeleton className="h-9" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col gap-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <ProductItem />
                <Separator className="bg-border" />
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default CartLoading;

const ProductItem = () => {
  const Info = <Skeleton className="w-full h-5" />;
  return (
    <div className="flex gap-2 p-3">
      <div className="flex flex-col items-center justify-between">
        <Skeleton className="w-28 h-28" />
        <Skeleton className="w-full h-8" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {Info}
        {Info}
        {Info}
        {Info}
        {Info}
        {Info}
      </div>
    </div>
  );
};

const InfoItem = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <Skeleton className="w-2/3 h-5" />
      <Skeleton className="w-1/3 h-5" />
    </div>
  );
};
