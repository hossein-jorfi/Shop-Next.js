import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const buttonStyles = "hover:text-red";

const AddToCartButton = () => {
  return (
    <div>
      <Button className="w-full font-bold">Add To Card</Button>

      <div className="border p-1 flex items-center gap-2 text-red rounded-lg w-fit bg-white shadow-sm">
        <Button variant="ghost" size="icon" className={buttonStyles}>
          <Trash2 />
        </Button>
        <p className="text-sm font-medium">1</p>
        <Button variant="ghost" size="icon" className={buttonStyles}>
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;
