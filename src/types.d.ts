//  Components
interface DishCard {
  dayOfWeek: DaysOfWeek;
  imageUrl?: string;
  proposerName: ProposerNames | "";
  dishName: string;
  id: number;
  accepted: bolean;
}
interface DishCardProps extends DishCard {}

type DishCardDataProps = Pick<DishCard, "dayOfWeek" | "proposerName" | "dishName">;

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

interface DishViewProps {
  dishImages: DishData[];
  dishName?: string;
  title: string;
  weekday?: DaysOfWeek | "";
}

type DishData = { img: string; title: string };

interface ListDishesViewProps {
  title: string;
  type: "list" | "edit";
}

interface RedirectButtonProps {
  disabled?: boolean;
  fontSize: string;
  redirect: string;
  Icon: React.ElementType;
}

// Contexts

interface SessionContext {
  name: string;
  roomId: string;
  setName: (string) => void;
  setRoomId: (string) => void;
}

interface DishesContext extends DishesReducerState {
  setDishes: (payload: DishCard[]) => void;
  setCurrentDish: (payload: DishCard) => void;
  toggleAcceptedDish: (payload: number) => void;
}

// Reducers

interface DishesReducerState {
  currentDish: DishCard;
  dishes: DishCard[];
}

type DishesReducerActions =
  | {
      type: "SET_CURRENT_DISH";
      payload: DishCard;
    }
  | {
      type: "SET_DISHES";
      payload: DishCard[];
    }
  | {
      type: "TOGGLE_ACCEPTED_DISH";
      payload: number;
    };

// Globals
export enum DaysOfWeek {
  lunes = "lunes",
  martes = "martes",
  miercoles = "miercoles",
  jueves = "jueves",
  viernes = "viernes",
  sabado = "sabado",
  domingo = "domingo",
}

export enum ProposerNames {
  andy = "andy",
  carmen = "carmen",
  danny = "danny",
  nicolay = "nicolay",
  geraldo = "geraldo",
  franzua = "franzua",
}
