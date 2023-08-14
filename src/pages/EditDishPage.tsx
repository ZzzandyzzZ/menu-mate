import { dishImageData } from "@/constants";
import { DishView } from "@/components/DishView";
import { useDishes } from "@/hooks/useDishes";

export default function EditDishPage() {
  const {
    currentDish: { dishName, dayOfWeek },
  } = useDishes();
  return <DishView title="Editar Plato" dishImages={dishImageData} dishName={dishName} weekday={dayOfWeek} />;
}
