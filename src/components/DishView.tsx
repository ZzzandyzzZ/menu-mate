import { Box, ImageList, ImageListItem, MenuItem, TextField, Typography } from "@mui/material";

import MainLayout from "@/layout/MainLayout";
import { DaysOfWeek } from "@/types.d";

export function DishView({ title, dishImages, dishName, weekday = "" }) {
  return (
    <MainLayout>
      <Typography variant="h5" textAlign="center" sx={{ py: 1 }}>
        {title}
      </Typography>
      <Box component="form">
        <TextField fullWidth label="Nombre del plato" sx={{ my: 1 }} size="small" value={dishName} />
        <TextField fullWidth label="Dia de la semana" select size="small" defaultValue={weekday}>
          {Object.values(DaysOfWeek).map((option) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </TextField>
        <ImageList cols={2}>
          {dishImages.map((item) => (
            <ImageListItem key={item.img} sx={{ bgcolor: "#F6F4EB" }}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </MainLayout>
  );
}
