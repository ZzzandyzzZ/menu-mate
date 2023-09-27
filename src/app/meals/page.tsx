import { mealService } from '@/dependencies'

interface Props {
  searchParams: { room_id: string }
}
export default async function MealsPage({ searchParams }: Props) {
  const meals = await mealService.getMeals(searchParams.room_id)
  return <>{JSON.stringify(meals)}</>
}
