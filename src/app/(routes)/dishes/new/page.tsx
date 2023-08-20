import { dishImageData } from '@/constants'
import { DishView } from '@/app/components/DishView'

export default function NewDishPage (): JSX.Element {
  return <DishView type="add" dishImages={dishImageData} />
}
