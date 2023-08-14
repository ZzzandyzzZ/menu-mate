import { DishesContext } from "@/contexts/dishesContext";
import { useContext } from "react";

export function useDishes() {
  const context = useContext(DishesContext);
  if (context == null) throw Error("useDishes must be used within a DishesProvider");
  return context;
}
