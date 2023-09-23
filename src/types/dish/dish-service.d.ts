export interface DishService {
  startDishCreation: (newDishFormData: NewDishFormData) => Promise<void>
  startDishUpdate: (edditableDish: EdditableDish) => Promise<void>
  startDishesFetching: () => Promise<void>
}
