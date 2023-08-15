// Globals
type UUID = `${string}-${string}-${string}-${string}-${string}`;
interface DishCard {
  accepted: bolean;
  weekday: DaysOfWeek | "";
  dishName: string;
  id: UUID;
  imageUrl?: string;
  proposerName: ProposerNames | "";
}

//  Components

interface DishCardProps extends DishCard {}

type DishCardDataProps = Pick<DishCard, "weekday" | "proposerName" | "dishName">;
type EdditableDishCard = Partial<Pick<DishCard, Exclude<keyof DishCard, "id" | "proposerName">>>;

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

interface DishViewProps {
  dishImages: DishData[];
  type: "edit" | "add";
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

interface SessionState {
  name: ProposerNames | "";
  roomId: string;
}

interface SessionContext extends SessionState {
  setName: (string) => void;
  setRoomId: (string) => void;
}

// Reducers

interface DishesReducerState {
  currentDish: DishCard;
  dishes: DishCard[];
}

interface DishesContext extends DishesReducerState {
  addDish: (payload: DishCard) => void;
  clearCurrDish: () => void;
  setCurrentDish: (payload: DishCard) => void;
  setDishes: (payload: DishCard[]) => void;
  toggleAcceptedDish: (payload: UUID) => void;
  updateDish: (payload: EdditableDishCard) => void;
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
      payload: UUID;
    }
  | {
      type: "ADD_DISH";
      payload: DishCard;
    }
  | {
      type: "CLEAR_CURRENT_DISH";
    }
  | {
      type: "UPDATE_CURR_DISH";
      payload: EdditableDishCard;
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
