import { MealForm, PageTitle } from '@/components'
import { mealService } from '@/dependencies'
import { useJwtData } from '@/hooks'

interface Props {
  params: {
    id: string
  }
  searchParams?: {
    search?: string
  }
}

export default async function EditMealPage({ params }: Props) {
  const jwtData = await useJwtData()
  const meal = await mealService.getMealById(params.id, jwtData?.roomId as string)
  return (
    <>
      <PageTitle title="Editar Plato" />
      <MealForm buttonText="Editar" currMealName={meal.mealName} currWeekday={meal.weekday} />
    </>
  )
}
