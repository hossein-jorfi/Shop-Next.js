import { Separator } from "@/components/ui/separator";
import CompanyLogo from "@/ui/shared/company-logo";

const Info = () => {
  return (
    <div className="flex flex-col gap-3">
      <CompanyLogo />
      <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
        <p>Customer Support : +1 999-888-77-66</p>
        <Devider />
        <p>+1 888-777-66-55</p>
        <Devider />
        <p>We answer you 24 hours a day, 7 days a week</p>
      </div>
    </div>
  );
};

export default Info;

const Devider = () => {
  return <Separator orientation="vertical" className="h-3" />;
};
