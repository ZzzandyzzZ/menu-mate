import { MealForm, PageTitle, SimpleMessage } from '@/components'
import { mealService } from '@/dependencies'

import type { UUID } from 'crypto'

interface Props {
  params: {
    id: UUID
  }
}

export default async function EditMealPage({ params }: Props) {
  const meal = await mealService.getMealById(params.id)
  if (meal == null) {
    return <SimpleMessage title="Plato no encontrado" message="El id proporcionado no es válido" />
  }
  return (
    <>
      <PageTitle title="Editar Plato" />
      <MealForm
        buttonText="Editar"
        mealId={meal.id}
        currMealName={meal.mealName}
        currWeekday={meal.weekday}
      />
    </>
  )
}
