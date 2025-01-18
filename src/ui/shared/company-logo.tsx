import { GlobeAltIcon } from "@heroicons/react/24/outline";

const CompanyLogo = () => {
  return (
    <div className="text-red flex">
      <GlobeAltIcon width={42} height={42} />
      <p className="font-bold text-4xl">Shop</p>
    </div>
  );
};

export default CompanyLogo;
