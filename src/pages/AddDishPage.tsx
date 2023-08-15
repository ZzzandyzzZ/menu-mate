import { dishImageData } from "@/constants";
import { DishView } from "@/components/DishView";

export default function AddDishPage() {
  return <DishView type="add" dishImages={dishImageData} />;
}
