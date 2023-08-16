import { type PropsWithChildren, createContext, useReducer, useCallback } from "react";

import { dishesReducer } from "@/reducers/dishesReducer";
import { DishCard, UUID, type DishesContext as DishesContextType, EdditableDishCard } from "@/types.d";
import { dishesInitialState } from "@/constants";

export const DishesContext = createContext<DishesContextType | null>(null);

const useDishesReducer = () => {
  const [state, dispatch] = useReducer(dishesReducer, dishesInitialState);
  const { currentDish, dishes } = state;

  const setDishesList = (payload: DishCard[]) => {
    dispatch({ type: "SET_DISHES_LIST", payload });
  };

  const setCurrDish = (payload: DishCard) => {
    dispatch({ type: "SET_CURR_DISH", payload });
  };

  const clearCurrDish = useCallback(() => {
    dispatch({ type: "CLEAR_CURR_DISH" });
  }, []);

  const addDishToList = (payload: DishCard) => {
    dispatch({ type: "ADD_DISH_TO_LIST", payload });
  };

  const toggleAcceptedOnList = (payload: UUID) => {
    dispatch({ type: "TOGGLE_ACCEPTED_ON_LIST", payload });
  };

  const updateCurrDish = (payload: EdditableDishCard) => {
    dispatch({ type: "UPDATE_CURR_DISH", payload });
  };

  const updateDishOnList = (payload: { id: UUID; dish: EdditableDishCard }) => {
    dispatch({ type: "UPDATE_DISH_ON_LIST", payload });
  };

  return {
    currentDish,
    dishes,
    addDishToList,
    clearCurrDish,
    setCurrDish,
    setDishesList,
    toggleAcceptedOnList,
    updateCurrDish,
    updateDishOnList,
  };
};
export const DishesProvider = ({ children }: PropsWithChildren) => {
  const value = useDishesReducer();
  return <DishesContext.Provider value={value}>{children}</DishesContext.Provider>;
};
