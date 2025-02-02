"use client";

import CompanyLogo from "@/ui/shared/company-logo";
import Search from "./nav-search";
import { UserRound, Bell, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useCartStore from "@/store/useCartStore";
import { getTotalProductsCount } from "@/store/utils";

const TopSection = () => {
  const router = useRouter();

  const products = useCartStore(state => state.products)
  const cartTotalCount = getTotalProductsCount(products)

  return (
    <div className="flex justify-between items-center gap-7">
      <div className="flex gap-3 items-center w-full md:w-1/2">
        <CompanyLogo />
        <Search />
      </div>

      <div className="hidden sm:flex gap-3 items-center text-primary/80">
        <div className="flex gap-2 items-center">
          <NavItemWraper>
            <Bell />
          </NavItemWraper>
          <NavItemWraper>
            <UserRound />
          </NavItemWraper>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <NavItemWraper count={cartTotalCount} onClick={() => router.push("/cart")}>
          <ShoppingCart />
        </NavItemWraper>
      </div>
    </div>
  );
};

export default TopSection;

const NavItemWraper = ({
  children,
  onClick,
  count,
}: {
  children: ReactNode;
  onClick?: () => void;
  count?: number;
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-md p-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 hover:bg-accent hover:text-accent-foreground cursor-pointer relative"
    >
      {children}
      {count! > 0 && (
        <span
          className={cn(
            "absolute top-0 right-0 bg-red font-bold text-white texts-sm rounded-full flex justify-center items-center",
            count && count < 10 && "w-5 h-5",
            count && count >= 10 && "w-[22px] h-[22px]",
            count && count >= 100 && "w-fit px-1 h-5 -right-3",
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
};
