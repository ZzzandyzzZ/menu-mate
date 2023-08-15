import { type PropsWithChildren, createContext, useReducer, useCallback } from "react";

import { dishesReducer } from "@/reducers/dishesReducer";
import { DishCard, UUID, type DishesContext as DishesContextType, EdditableDishCard } from "@/types.d";
import { dishesInitialState } from "@/constants";

export const DishesContext = createContext<DishesContextType | null>(null);

const useDishesReducer = () => {
  const [state, dispatch] = useReducer(dishesReducer, dishesInitialState);
  const { currentDish, dishes } = state;

  const setDishes = (payload: DishCard[]) => {
    dispatch({ type: "SET_DISHES", payload });
  };

  const setCurrentDish = (payload: DishCard) => {
    dispatch({ type: "SET_CURRENT_DISH", payload });
  };

  const clearCurrDish = useCallback(() => {
    dispatch({ type: "CLEAR_CURRENT_DISH" });
  }, []);

  const addDish = (payload: DishCard) => {
    dispatch({ type: "ADD_DISH", payload });
  };

  const toggleAcceptedDish = (payload: UUID) => {
    dispatch({ type: "TOGGLE_ACCEPTED_DISH", payload });
  };

  const updateDish = (payload: EdditableDishCard) => {
    dispatch({ type: "UPDATE_CURR_DISH", payload });
  };

  return {
    currentDish,
    dishes,
    addDish,
    clearCurrDish,
    setCurrentDish,
    setDishes,
    toggleAcceptedDish,
    updateDish,
  };
};
export const DishesProvider = ({ children }: PropsWithChildren) => {
  const value = useDishesReducer();
  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
};
