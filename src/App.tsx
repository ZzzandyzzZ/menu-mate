import { Box, CardMedia, Container, IconButton, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import capitalizeFirstLetter from "./lib/capitalizeFirstLetter";
import { DaysOfWeek, type DishCardProps, ProposerNames } from "./types.d";

const MenuData = [
  {
    dishName: "CHURRASCO",
    dayOfWeek: DaysOfWeek.lunes,
    proposerName: ProposerNames.andy,
    imageUrl: "https://tropicalcomidarapida.com/wp-content/uploads/resized_CHURRASCO-1-1.jpg",
  },
  {
    dishName: "Sushi",
    dayOfWeek: DaysOfWeek.martes,
    proposerName: ProposerNames.andy,
    imageUrl:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg",
  },
  {
    dishName: "Hamburguesa",
    dayOfWeek: DaysOfWeek.miercoles,
    proposerName: ProposerNames.franzua,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg",
  },
  {
    dishName: "Pizza",
    dayOfWeek: DaysOfWeek.jueves,
    proposerName: ProposerNames.nicolay,
    imageUrl:
      "https://newluxbrand.com/wp-content/uploads/2022/01/pizza-jamo%CC%81n-y-queso-Newlux-1024x1024-optimized.jpg",
  },
  {
    dishName: "Pollo a la brasa",
    dayOfWeek: DaysOfWeek.viernes,
    proposerName: ProposerNames.danny,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G5c2w0m1kc-nSNDEoB7m9Poqz1XhEW63I9zuJ3vwApL1yprknQjl_RzliwjqZO0vuhE&usqp=CAU",
  },
  {
    dishName: "Tacos",
    dayOfWeek: DaysOfWeek.sabado,
    proposerName: ProposerNames.geraldo,
    imageUrl:
      "https://elcomercio.pe/resizer/g6Ldu9oMow8edKtfighUHjyTTn4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/324VE4IKPRBSFE7QL443A6FZBI.jpg",
  },
  {
    dishName: "Caldo blanco",
    dayOfWeek: DaysOfWeek.domingo,
    proposerName: ProposerNames.carmen,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxycVg9vHYhP7Ly3Z91O9wNZ1pZBYXZK3VaUYcvTdXC2WQ7hfDpz745eIH0wmW6-WuCDs&usqp=CAU",
  },
];

function DishCard({ dayOfWeek, imageUrl, proposerName, dishName }: DishCardProps) {
  const capDayOfWeek = capitalizeFirstLetter(dayOfWeek);
  const capProposerName = capitalizeFirstLetter(proposerName);
  const capDishName = capitalizeFirstLetter(dishName);
  return (
    <Box sx={{ my: "4px", display: "flex", alignItems: "center", position: "relative" }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={dishName}
        sx={{
          borderRadius: "50%",
          width: "40%",
          height: "40%",
          aspectRatio: 1 / 1,
          zIndex: 1,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          pl: 1,
        }}
      >
        <Typography component="div" variant="h6">
          {capDishName}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          {capDayOfWeek} - {capProposerName}
        </Typography>
      </Box>
      <Paper
        elevation={6}
        sx={{ left: "20%", width: "80%", height: "75%", position: "absolute", zIndex: 0, backgroundColor: "#F6F4EB" }}
      />
    </Box>
  );
}
function App() {
  return (
    <Container component="main" sx={{ bgcolor: "#91C8E4" }}>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">Menu Semanal</Typography>
      </Box>
      <Box>
        {MenuData.map((menu) => (
          <DishCard key={menu.dishName} {...menu} />
        ))}
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
        <IconButton size="large">
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}

export default App;
