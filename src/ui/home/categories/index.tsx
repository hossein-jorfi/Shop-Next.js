const ITEMS = [
  {
    title: "Electronics",
    href: "#",
  },
  {
    title: "Jewelery",
    href: "#",
  },
  {
    title: "Mens clothing",
    href: "#",
  },
  {
    title: "Women's clothing",
    href: "#",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 mt-5 px-5 custom-container">
      {ITEMS.map((item, index) => (
        <div
          className="border h-52 flex justify-center items-center rounded-xl text-red"
          key={index}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Categories;
