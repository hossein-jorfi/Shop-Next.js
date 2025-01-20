const ITEMS = [
  "bg-sky-400",
  "bg-orange-400",
  "bg-gray-400",
  "bg-rose-400",
  "bg-lime-400",
];

const ColorsPlate = () => {
  return (
    <div className="absolute top-2 flex pl-3">
      {ITEMS.map((item, index) => (
        <div
          key={index}
          className={`w-4 h-4 -ml-1.5 border border-white rounded-full ${item}`}
        />
      ))}
    </div>
  );
};

export default ColorsPlate;
