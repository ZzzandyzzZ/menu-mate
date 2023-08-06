import { dishImageData } from "@/constants";
import { DishView } from "@/components/DishView";
import { DaysOfWeek } from "@/types.d";

export default function EditDishPage() {
  return (
    <DishView title="Editar Plato" dishImages={dishImageData} dishName="Pollo a la brasa" weekday={DaysOfWeek.jueves} />
  );
}
