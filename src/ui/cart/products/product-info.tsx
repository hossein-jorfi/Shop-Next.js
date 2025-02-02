import { ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

export const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-primary/90">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <div className="flex flex-col items-start gap-1">
        <InfoItem text="black">
          <div className="w-4 h-4 rounded-full bg-black" />
        </InfoItem>
        <InfoItem text="One Year Guarantee">
          <ShieldCheck className="h-5 w-5" />
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
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <div className="h-5 w-5 flex justify-center items-center">{children}</div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};
