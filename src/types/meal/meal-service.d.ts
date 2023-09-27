export interface MealService {
  startMealCreation: (newMealFormData: NewMealFormData) => Promise<void>
  startMealUpdate: (edditableMeal: EdditableMeal) => Promise<void>
  startMealesFetching: () => Promise<void>
}
