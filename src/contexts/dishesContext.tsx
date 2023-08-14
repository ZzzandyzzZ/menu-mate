import { type PropsWithChildren, createContext, useReducer } from "react";

import { dishesReducer } from "@/reducers/dishesReducer";
import { DishCard, DishesReducerState, type DishesContext as DishesContextType, DaysOfWeek } from "@/types.d";

export const DishesContext = createContext<DishesContextType | null>(null);

const initialState: DishesReducerState = {
  currentDish: {
    dishName: "",
    dayOfWeek: DaysOfWeek.lunes,
    proposerName: "",
    accepted: false,
    id: -1,
  },
  dishes: [],
};

const useDishesReducer = () => {
  const [state, dispatch] = useReducer(dishesReducer, initialState);
  const { currentDish, dishes } = state;

  const setDishes = (payload: DishCard[]) => {
    dispatch({ type: "SET_DISHES", payload });
  };

  const setCurrentDish = (payload: DishCard) => {
    dispatch({ type: "SET_CURRENT_DISH", payload });
  };
  const toggleAcceptedDish = (payload: number) => {
    dispatch({ type: "TOGGLE_ACCEPTED_DISH", payload });
  };

  return {
    currentDish,
    dishes,
    setDishes,
    setCurrentDish,
    toggleAcceptedDish,
  };
};
export const DishesProvider = ({ children }: PropsWithChildren) => {
  const value = useDishesReducer();
  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
};
