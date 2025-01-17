import Categories from "@/ui/home/categories";
import { MainSlider } from "@/ui/home/main-slider";

export default function Home() {
  return (
    <div>
      <div className="custom-container">
        <MainSlider />
        <Categories />
      </div>
    </div>
  );
}
