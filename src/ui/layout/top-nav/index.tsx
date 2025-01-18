import BottomSection from "./bottom-section";
import TopSection from "./top-section";

const TopNav = () => {
  return (
    <div className="border-b shadow content-paddign-x content-paddign-y sm:!pb-0 fixed top-0 w-full bg-background z-10">
      <div className="custom-container">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default TopNav;
