import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ImageList, ImageListItem, MenuItem, TextField, Typography } from "@mui/material";

import { DaysOfWeek, DishViewProps } from "@/types.d";
import { useDishes } from "@/hooks/useDishes";
import MainLayout from "@/layout/MainLayout";
import { useSession } from "@/hooks/useSession";

export function DishView({ dishImages, type }: DishViewProps) {
  const {
    currentDish: { dishName, weekday },
    clearCurrDish,
    addDish,
    updateDish,
  } = useDishes();
  const { name } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ADD", type, clearCurrDish);
    if (type == "add") clearCurrDish();
  }, [clearCurrDish, type]);

  const handleClick = () => {
    if (type == "add") {
      addDish({ id: crypto.randomUUID(), dishName, weekday, imageUrl: "", accepted: false, proposerName: name });
      navigate("/list");
    } else {
      console.log("Actualizar");
    }
  };
  console.log({ dishName, weekday });
  return (
    <MainLayout>
      <Typography variant="h5" textAlign="center" sx={{ py: 1 }}>
        {type === "edit" ? "Editar Plato" : "Agregar Plato"}
      </Typography>
      <Box component="form">
        <TextField
          fullWidth
          label="Nombre del plato"
          sx={{ my: 1 }}
          size="small"
          value={dishName}
          onChange={(e) => {
            updateDish({ dishName: e.target.value });
          }}
        />
        <TextField
          fullWidth
          label="Dia de la semana"
          select
          size="small"
          value={weekday}
          onChange={(e) => {
            updateDish({ weekday: e.target.value as DaysOfWeek });
          }}
        >
          {Object.values(DaysOfWeek).map((option) => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
        </TextField>
        <ImageList cols={2}>
          {dishImages.map(({ img, title }) => (
            <ImageListItem key={img} sx={{ bgcolor: "#F6F4EB" }}>
              <img src={img} alt={title} />
            </ImageListItem>
          ))}
        </ImageList>
        <Button fullWidth variant="outlined" sx={{ mb: 3 }} onClick={handleClick}>
          {type === "edit" ? "Editar" : "Agregar"}
        </Button>
      </Box>
    </MainLayout>
  );
}
