import CompanyLogo from "@/ui/shared/company-logo";

const Footer = () => {
  return (
    <div className="mt-10 py-10 border-t">
      <div className="custom-container content-paddign-x">
        <div className="flex justify-between">
          <div>
            <CompanyLogo />
          </div>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
