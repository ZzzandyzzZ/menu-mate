import { dishesInitialState } from "@/constants";
import { DishesReducerActions, type DishesReducerState } from "@/types.d";

export function dishesReducer(state: DishesReducerState, action: DishesReducerActions) {
  switch (action.type) {
    case "SET_CURRENT_DISH":
      return { ...state, currentDish: action.payload };
    case "TOGGLE_ACCEPTED_DISH": {
      const dishIndex = state.dishes.findIndex((item) => item.id === action.payload);
      const newDishes = structuredClone(state.dishes);
      newDishes[dishIndex].accepted = !newDishes[dishIndex].accepted;
      return { ...state, dishes: newDishes };
    }
    case "SET_DISHES": {
      return { ...state, dishes: action.payload };
    }
    case "CLEAR_CURRENT_DISH": {
      return { ...state, currentDish: dishesInitialState.currentDish };
    }
    case "ADD_DISH": {
      const newDishes = [...state.dishes, action.payload];
      return { ...state, dishes: newDishes };
    }
    case "UPDATE_CURR_DISH": {
      const newCurrDish = { ...state.currentDish, ...action.payload };
      return { ...state, currentDish: newCurrDish };
    }
  }
  return state;
}
