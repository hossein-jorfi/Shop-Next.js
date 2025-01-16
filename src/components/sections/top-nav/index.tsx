import BottomSection from "./bottom-section";
import TopSection from "./top-section";

const TopNav = () => {
  return (
    <div className="border-b shadow content-paddign-x content-paddign-y !pb-0">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default TopNav;
