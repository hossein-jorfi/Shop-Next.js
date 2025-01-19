import Link from "next/link";

import NotFoundSVG from "@/assets/common/Not-Found.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image src={NotFoundSVG} alt="notfound" className="lg:w-1/2" />
      <div className="space-y-3">
        <h2 className="font-medium text-2xl">Page Not Found!</h2>
        <Button className="font-bold">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
