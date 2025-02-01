'use client'

import CompanyLogo from "@/ui/shared/company-logo";
import Search from "./nav-search";
import { UserRound, Bell, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const TopSection = () => {

  const router = useRouter()

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
        <NavItemWraper onClick={() => router.push('/cart')}>
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
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-md p-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 hover:bg-accent hover:text-accent-foreground cursor-pointer"
    >
      {children}
    </div>
  );
};
