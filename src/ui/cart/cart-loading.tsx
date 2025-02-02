const CartLoading = () => {
  return (
    <>
      <div className="w-[300px] shrink-0">
        <div className="border rounded-lg p-3 flex flex-col gap-2"></div>
      </div>
      <div className="flex-grow">
        <div className="flex flex-col gap-2 border"></div>
      </div>
    </>
  );
};

export default CartLoading;
