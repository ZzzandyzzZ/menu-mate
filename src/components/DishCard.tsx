import { Box, CardMedia, Paper, Typography } from "@mui/material";

import { capitalizeFirstLetter } from "@/lib";

import { type DishCardProps } from "@/types.d";

export function DishCard({ dayOfWeek, imageUrl, proposerName, dishName }: DishCardProps) {
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
