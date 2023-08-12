import { Box, CardMedia, Paper } from "@mui/material";

import { type DishCardProps } from "@/types.d";
import { DishCardData } from "./DishCardData";

export function InfoDishCard({ dayOfWeek, imageUrl, proposerName, dishName }: DishCardProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
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
        <DishCardData dayOfWeek={dayOfWeek} proposerName={proposerName} dishName={dishName} />
      </Box>
      <Paper
        elevation={6}
        sx={{ left: "20%", width: "80%", height: "75%", position: "absolute", zIndex: 0, backgroundColor: "#F6F4EB" }}
      />
    </Box>
  );
}
