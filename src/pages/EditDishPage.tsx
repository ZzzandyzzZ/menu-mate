import { dishImageData } from "@/constants";
import { DishView } from "@/components/DishView";

export default function EditDishPage() {
  return <DishView type="edit" dishImages={dishImageData} />;
}
