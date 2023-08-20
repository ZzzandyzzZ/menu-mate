// Globals
type UUID = `${string}-${string}-${string}-${string}-${string}`
interface DishCard {
  accepted: boolean
  weekday: DaysOfWeek | ''
  dishName: string
  id: UUID
  imageUrl?: string
  proposerName: ProposerNames | ''
}

//  Components

interface DishCardProps extends DishCard {}

type DishCardDataProps = Pick<DishCard, 'weekday' | 'proposerName' | 'dishName'>
type EdditableDishCard = Partial<Pick<DishCard, Exclude<keyof DishCard, 'id' | 'proposerName'>>>

interface DishViewProps {
  dishImages: DishData[]
  type: 'edit' | 'add'
}

interface DishData { img: string, title: string }

interface ListDishesViewProps {
  title: string
  type: 'list' | 'edit'
}

interface RedirectButtonProps {
  disabled?: boolean
  fontSize: string
  redirect: string
  Icon: React.ElementType
}

// Contexts

interface SessionState {
  proposerName: ProposerNames | ''
  roomId: string
}

interface SessionContext extends SessionState {
  setName: (string) => void
  setRoomId: (string) => void
}

// Reducers

interface DishesReducerState {
  currentDish: DishCard
  dishes: DishCard[]
}

interface DishesContext extends DishesReducerState {
  addDishToList: (payload: DishCard) => void
  clearCurrDish: () => void
  setCurrDish: (payload: DishCard) => void
  setDishesList: (payload: DishCard[]) => void
  toggleAcceptedOnList: (payload: UUID) => void
  updateCurrDish: (payload: EdditableDishCard) => void
  updateDishOnList: (payload: { id: UUID, dish: EdditableDishCard }) => void
}

type DishesReducerActions =
  | {
    type: 'SET_CURR_DISH'
    payload: DishCard
  }
  | {
    type: 'SET_DISHES_LIST'
    payload: DishCard[]
  }
  | {
    type: 'TOGGLE_ACCEPTED_ON_LIST'
    payload: UUID
  }
  | {
    type: 'ADD_DISH_TO_LIST'
    payload: DishCard
  }
  | {
    type: 'CLEAR_CURR_DISH'
  }
  | {
    type: 'UPDATE_CURR_DISH'
    payload: EdditableDishCard
  }
  | {
    type: 'UPDATE_DISH_ON_LIST'
    payload: { id: UUID, dish: EdditableDishCard }
  }

// Globals
export enum DaysOfWeek {
  lunes = 'lunes',
  martes = 'martes',
  miercoles = 'miercoles',
  jueves = 'jueves',
  viernes = 'viernes',
  sabado = 'sabado',
  domingo = 'domingo',
}

export enum ProposerNames {
  andy = 'andy',
  carmen = 'carmen',
  danny = 'danny',
  nicolay = 'nicolay',
  geraldo = 'geraldo',
  franzua = 'franzua',
}
