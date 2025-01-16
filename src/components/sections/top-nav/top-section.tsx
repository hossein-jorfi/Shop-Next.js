import { GlobeAltIcon } from "@heroicons/react/24/outline";

const TopSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 items-center">
        <div className="text-red flex items-center">
          <GlobeAltIcon width={42} height={42} />
          <p className="font-bold text-4xl">Shop</p>
        </div>
        <div>Maybe Search</div>
      </div>
      <div>Cart and User Profile</div>
    </div>
  );
};

export default TopSection;
