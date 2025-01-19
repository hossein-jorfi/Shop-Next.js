import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CompanyLogo = () => {

  return (
    <Link href='/' className="text-red flex cursor-pointer">
      <GlobeAltIcon width={42} height={42} />
      <p className="font-bold text-4xl">Shop</p>
    </Link>
  );
};

export default CompanyLogo;
