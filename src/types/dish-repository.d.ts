interface DishRepository {
  getAll: () => Promise<Dish[]>
  // update: (id: UUID) => Dish
  create: (dish: NewDish) => Promise<Dish>
}
