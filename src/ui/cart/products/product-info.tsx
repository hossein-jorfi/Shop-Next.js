import { ReactNode } from "react";

export const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-primary/90">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <div className="flex flex-col">
        <InfoItem text="black">
          <div className="w-4 h-4 rounded-full bg-black" />
        </InfoItem>
      </div>
    </div>
  );
};

const InfoItem = ({
  children,
  text,
}: {
  text: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <div>{children}</div>
      <p className="text-muted-foreground text-sm font-medium">{text}</p>
    </div>
  );
};
