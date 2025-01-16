const TopNav = () => {
  return (
    <div>
      <TopSection />
    </div>
  );
};

export default TopNav;

const TopSection = () => {
  return (
    <div className="flex justify-between content-paddign">
      <div>Logo and Name</div>
      <div>Maybe Search</div>
      <div>Cart and User Profile</div>
    </div>
  );
};
