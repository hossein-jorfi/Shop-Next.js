import Info from "./info";
import Options from "./options";
import { Separator } from "@/components/ui/separator";
import ReturnToTop from "./return-to-top";

const Footer = () => {

  return (
    <div className="mt-10 py-10 border-t">
      <div className="custom-container content-paddign-x flex flex-col gap-12">
        <div className="flex flex-col gap-5 lg:gap-3">
          <div className="flex justify-between">
            <Info />
            <ReturnToTop />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3 text-xs font-medium text-muted-foreground">
            <p>Customer Support : +1 999-888-77-66</p>
            <Devider />
            <p>+1 888-777-66-55</p>
            <Devider />
            <p>We answer you 24 hours a day, 7 days a week</p>
          </div>
        </div>

        <Options />
      </div>
    </div>
  );
};

export default Footer;

const Devider = () => {
  return <Separator className="vertical h-[1px] w-full lg:h-3 lg:w-[1px]" />;
};
