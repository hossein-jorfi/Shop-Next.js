import Search from "./nav-search";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { UserRound, Bell, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";

const TopSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="text-red flex">
          <GlobeAltIcon width={42} height={42} />
          <p className="font-bold text-4xl">Shop</p>
        </div>
        <Search />
      </div>

      <div className="flex gap-3 items-center text-primary/80">
        <div className="flex gap-2 items-center">
          <NavItemWraper>
            <Bell />
          </NavItemWraper>
          <NavItemWraper>
            <UserRound />
          </NavItemWraper>
        </div>
        <div className="h-6 border-r border-primary/30 w-[1px]" />
        <NavItemWraper>
          <ShoppingCart />
        </NavItemWraper>
      </div>
    </div>
  );
};

export default TopSection;

const NavItemWraper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-md p-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:opacity-50 hover:bg-accent hover:text-accent-foreground cursor-pointer">
      {children}
    </div>
  );
};
