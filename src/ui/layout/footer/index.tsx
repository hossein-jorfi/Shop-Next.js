import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Info from "./info";

const Footer = () => {
  return (
    <div className="mt-10 py-10 border-t">
      <div className="custom-container content-paddign-x">
        <div className="flex justify-between">
          <Info />
          <Button
            variant="outline"
            className="text-muted-foreground relative pr-7"
          >
            Return Top Top
            <ChevronUp className="absolute right-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
