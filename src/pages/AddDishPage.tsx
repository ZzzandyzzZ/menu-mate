import { Box, ImageList, ImageListItem, MenuItem, TextField, Typography } from "@mui/material";

import MainLayout from "@/layout/MainLayout";
import { DaysOfWeek } from "@/types.d";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];

export default function AddDishPage() {
  return (
    <MainLayout>
      <Box py={1} textAlign="center">
        <Typography variant="h6">Agregar plato</Typography>
      </Box>
      <Box component="form">
        <TextField fullWidth label="Nombre del plato" sx={{ my: 1 }} size="small" />
        <TextField fullWidth label="Dia de la semana" select size="small" defaultValue="">
          {Object.values(DaysOfWeek).map((option) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </TextField>
        <ImageList cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ bgcolor: "#F6F4EB" }}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </MainLayout>
  );
}
