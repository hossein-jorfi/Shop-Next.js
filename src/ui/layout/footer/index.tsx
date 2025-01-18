import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Info from "./info";
import Options from "./options";

const Footer = () => {
  return (
    <div className="mt-10 py-10 border-t">
      <div className="custom-container content-paddign-x flex flex-col gap-12">
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

        <Options />
      </div>
    </div>
  );
};

export default Footer;
