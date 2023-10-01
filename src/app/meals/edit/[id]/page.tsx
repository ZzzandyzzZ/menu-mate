import { MealForm, PageTitle } from '@/components'
import { mealService } from '@/dependencies'

interface Props {
  params: {
    id: string
  }
  searchParams?: {
    search?: string
  }
}

export default async function EditMealPage({ params }: Props) {
  const meal = await mealService.getMealById(params.id)
  return (
    <>
      <PageTitle title="Editar Plato" />
      <MealForm buttonText="Editar" currMealName={meal.mealName} currWeekday={meal.weekday} />
    </>
  )
}
