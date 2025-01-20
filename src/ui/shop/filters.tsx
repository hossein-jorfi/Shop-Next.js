import { Button } from "@/components/ui/button";

const ITEMS = [
  {
    title: "Most Popular",
    key: "#",
  },
  {
    title: "Most Sold",
    key: "#",
  },
  {
    title: "Most Expensive",
    key: "#",
  },
  {
    title: "Most Cheap",
    key: "#",
  },
];

const Filters = () => {
  return (
    <div className="p-3 w-80 border rounded-lg h-80 flex flex-col items-start">
      <div className="flex justify-between w-full items-center">
        <p className="font-semibold text-primary/90">Filters</p>
        <Button
          variant="ghost"
          className="text-custom-blue font-bold hover:text-custom-blue hover:bg-custom-blue/10"
          size="sm"
        >
          Clear All
        </Button>
      </div>
      <div className="flex flex-col items-start gap-2 mt-2 w-full">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className="border p-2 w-full text-left text-sm font-semibold text-muted-foreground rounded-md hover:bg-muted cursor-pointer"
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
