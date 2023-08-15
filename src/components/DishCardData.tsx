import { Typography } from "@mui/material";

import { capitalizeFirstLetter } from "@/lib";
import { DishCardDataProps } from "@/types.d";

export function DishCardData({ weekday, proposerName, dishName }: DishCardDataProps) {
  const capDayOfWeek = capitalizeFirstLetter(weekday);
  const capProposerName = capitalizeFirstLetter(proposerName);
  const capDishName = capitalizeFirstLetter(dishName);
  return (
    <>
      <Typography component="div" variant="h6">
        {capDishName}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {capDayOfWeek} - {capProposerName}
      </Typography>
    </>
  );
}
