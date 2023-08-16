import { dishesInitialState } from "@/constants";
import { DishesReducerActions, type DishesReducerState } from "@/types.d";

export function dishesReducer(state: DishesReducerState, action: DishesReducerActions) {
  // console.log({ state, action });
  switch (action.type) {
    case "SET_CURR_DISH":
      return { ...state, currentDish: action.payload };
    case "UPDATE_CURR_DISH": {
      const newCurrDish = { ...state.currentDish, ...action.payload };
      return { ...state, currentDish: newCurrDish };
    }
    case "CLEAR_CURR_DISH": {
      return { ...state, currentDish: dishesInitialState.currentDish };
    }
    case "TOGGLE_ACCEPTED_ON_LIST": {
      const dishIndex = state.dishes.findIndex((item) => item.id === action.payload);
      const newDishes = structuredClone(state.dishes);
      newDishes[dishIndex].accepted = !newDishes[dishIndex].accepted;
      return { ...state, dishes: newDishes };
    }
    case "SET_DISHES_LIST": {
      return { ...state, dishes: action.payload };
    }
    case "ADD_DISH_TO_LIST": {
      const newDishes = [...state.dishes, action.payload];
      return { ...state, dishes: newDishes };
    }
    case "UPDATE_DISH_ON_LIST": {
      const dishIndex = state.dishes.findIndex((item) => item.id === action.payload.id);
      const newDishes = structuredClone(state.dishes);
      newDishes[dishIndex] = { ...newDishes[dishIndex], ...action.payload.dish };
      return { ...state, dishes: newDishes };
    }
  }
  return state;
}
