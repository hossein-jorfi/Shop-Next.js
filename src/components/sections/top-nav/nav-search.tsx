import { IconInput, Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavSearch = () => {
  return (
    <div>
      {/* <Input className="relative" placeholder="Search" />
      <MagnifyingGlassIcon /> */}
      <IconInput icon={<MagnifyingGlassIcon />} />
    </div>
  );
};

export default NavSearch;
