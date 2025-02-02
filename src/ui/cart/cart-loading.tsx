import { Skeleton } from "@/components/ui/skeleton";

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
        <div className="flex flex-col gap-2 border"></div>
      </div>
    </>
  );
};

export default CartLoading;

const InfoItem = () => {
  return <div className="flex justify-between items-center gap-2">
      <Skeleton className="w-2/3 h-5" />
      <Skeleton className="w-1/3 h-5" />
  </div>;
};
