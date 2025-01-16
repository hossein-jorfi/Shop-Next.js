import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Search from "./nav-search";

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
      <div>Cart and User Profile</div>
    </div>
  );
};

export default TopSection;
