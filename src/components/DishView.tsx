import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, ImageList, ImageListItem, MenuItem, TextField, Typography } from "@mui/material";

import { DaysOfWeek, DishViewProps } from "@/types.d";
import { useDishes } from "@/hooks/useDishes";
import MainLayout from "@/layout/MainLayout";
import { useSession } from "@/hooks/useSession";
import { useDebounce } from "@/hooks/useDebounce";

export function DishView({ dishImages, type }: DishViewProps) {
  const {
    currentDish: { dishName, weekday, id },
    clearCurrDish,
    addDishToList,
    updateCurrDish,
    updateDishOnList,
  } = useDishes();
  const { proposerName } = useSession();
  const navigate = useNavigate();
  const debouncedName = useDebounce(dishName, 300);

  useEffect(() => {
    if (type == "add") clearCurrDish();
  }, [clearCurrDish, type]);

  useEffect(() => {
    if (debouncedName === "") return;
    console.log("Request");
  }, [debouncedName]);

  const handleClick = () => {
    if (type == "add") {
      addDishToList({
        id: crypto.randomUUID(),
        dishName,
        weekday,
        imageUrl: "",
        accepted: false,
        proposerName,
      });
      navigate("/proposals");
    } else {
      updateDishOnList({ id, dish: { dishName, weekday } });
      navigate("/proposals");
    }
  };

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
            updateCurrDish({ dishName: e.target.value });
          }}
        />
        <TextField
          fullWidth
          label="Dia de la semana"
          select
          size="small"
          value={weekday}
          onChange={(e) => {
            updateCurrDish({ weekday: e.target.value as DaysOfWeek });
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
