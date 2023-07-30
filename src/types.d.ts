interface DishCardProps {
  dayOfWeek: DaysOfWeek;
  imageUrl: string;
  proposerName: ProposerNames;
  dishName: string;
}

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}
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
