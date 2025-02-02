import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { CATEGORY_ITEMS } from "./bottom-section";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 m-0 w-fit h-fit">
          <Menu />
          Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-5">
        {CATEGORY_ITEMS.map((i, index) => (
          <DropdownMenuItem key={index}>
            <Link href={i.href}>{i.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
