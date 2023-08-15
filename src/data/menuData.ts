import { DaysOfWeek, type DishCard, ProposerNames } from "@/types.d";

export const MenuData: DishCard[] = [
  {
    id: "a6f8cb8e-9b6c-4a73-84b1-6d0b819a9541",
    dishName: "CHURRASCO",
    weekday: DaysOfWeek.lunes,
    proposerName: ProposerNames.andy,
    imageUrl: "https://tropicalcomidarapida.com/wp-content/uploads/resized_CHURRASCO-1-1.jpg",
    accepted: true,
  },
  {
    id: "3fd87295-69dd-48d1-b996-4ea007566d3f",
    dishName: "Sushi",
    weekday: DaysOfWeek.martes,
    proposerName: ProposerNames.andy,
    imageUrl:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg",
    accepted: true,
  },
  {
    id: "914ac0e1-1d60-42bf-9c5b-6db31c4f256a",
    dishName: "Hamburguesa",
    weekday: DaysOfWeek.miercoles,
    proposerName: ProposerNames.franzua,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg",
    accepted: true,
  },
  {
    id: "0c4f3c3c-083b-4bb5-ae71-81ed0b98e5f3",
    dishName: "Pizza",
    weekday: DaysOfWeek.jueves,
    proposerName: ProposerNames.nicolay,
    imageUrl:
      "https://newluxbrand.com/wp-content/uploads/2022/01/pizza-jamo%CC%81n-y-queso-Newlux-1024x1024-optimized.jpg",
    accepted: true,
  },
  {
    id: "9f146160-bd0c-405b-a0c6-51df21e2c137",
    dishName: "Pollo a la brasa",
    weekday: DaysOfWeek.viernes,
    proposerName: ProposerNames.danny,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G5c2w0m1kc-nSNDEoB7m9Poqz1XhEW63I9zuJ3vwApL1yprknQjl_RzliwjqZO0vuhE&usqp=CAU",
    accepted: true,
  },
  {
    id: "d2a0f50c-df50-4fe9-b537-b8e5ce9964d0",
    dishName: "Tacos",
    weekday: DaysOfWeek.sabado,
    proposerName: ProposerNames.geraldo,
    imageUrl:
      "https://elcomercio.pe/resizer/g6Ldu9oMow8edKtfighUHjyTTn4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/324VE4IKPRBSFE7QL443A6FZBI.jpg",
    accepted: true,
  },
  {
    id: "01e67225-896f-4f63-9ae9-6a3d5a3e3f15",
    dishName: "Caldo blanco",
    weekday: DaysOfWeek.domingo,
    proposerName: ProposerNames.carmen,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxycVg9vHYhP7Ly3Z91O9wNZ1pZBYXZK3VaUYcvTdXC2WQ7hfDpz745eIH0wmW6-WuCDs&usqp=CAU",
    accepted: true,
  },
];
