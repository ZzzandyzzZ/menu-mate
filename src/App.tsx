import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const MenuData = [
  {
    dishName: "Churrasco",
    dayOfWeek: "Lunes",
    proposerName: "Andy",
    imageUrl: "https://tropicalcomidarapida.com/wp-content/uploads/resized_CHURRASCO-1-1.jpg",
  },
  {
    dishName: "Sushi",
    dayOfWeek: "Martes",
    proposerName: "Andy",
    imageUrl:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg",
  },
  {
    dishName: "Hamburguesa",
    dayOfWeek: "Miércoles",
    proposerName: "Franzua",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg",
  },
  {
    dishName: "Pizza",
    dayOfWeek: "Jueves",
    proposerName: "Nicolay",
    imageUrl:
      "https://newluxbrand.com/wp-content/uploads/2022/01/pizza-jamo%CC%81n-y-queso-Newlux-1024x1024-optimized.jpg",
  },
  {
    dishName: "Pollo a la brasa",
    dayOfWeek: "Viernes",
    proposerName: "Danny",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G5c2w0m1kc-nSNDEoB7m9Poqz1XhEW63I9zuJ3vwApL1yprknQjl_RzliwjqZO0vuhE&usqp=CAU",
  },
  {
    dishName: "Tacos",
    dayOfWeek: "Sábado",
    proposerName: "Geraldo",
    imageUrl:
      "https://elcomercio.pe/resizer/g6Ldu9oMow8edKtfighUHjyTTn4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/324VE4IKPRBSFE7QL443A6FZBI.jpg",
  },
  {
    dishName: "Caldo blanco",
    dayOfWeek: "Domingo",
    proposerName: "Carmen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxycVg9vHYhP7Ly3Z91O9wNZ1pZBYXZK3VaUYcvTdXC2WQ7hfDpz745eIH0wmW6-WuCDs&usqp=CAU",
  },
];

function DishCard({ dayOfWeek, imageUrl, proposerName, dishName }) {
  return (
    <Card sx={{ display: "flex", my: "4px" }}>
      <Grid container>
        <Grid item xs={7} sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {dayOfWeek}
            </Typography>
            <Typography component="div" variant="subtitle1">
              {dishName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {proposerName}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={5} alignItems="center" display="flex" justifyContent="center" px={1}>
          <CardMedia component="img" image={imageUrl} alt={dishName} />
        </Grid>
      </Grid>
    </Card>
  );
}
function App() {
  return (
    <Container component="main" sx={{ bgcolor: "#aaa" }}>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">Menu Semanal</Typography>
      </Box>
      <Box>
        {MenuData.map((menu) => (
          <DishCard {...menu} />
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
