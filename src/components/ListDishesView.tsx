import { Box, Typography } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import BuildCircleTwoToneIcon from "@mui/icons-material/BuildCircleTwoTone";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";

import { DishCard } from "@/components";
import { MenuData } from "@/data";
import MainLayout from "@/layout/MainLayout";
import { ListDishesViewProps } from "@/types.d";
import { RedirectButton } from "./RedirectButton";

export function ListDishesView({ title, type }: ListDishesViewProps) {
  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box>
        {MenuData.map((menu) => (
          <DishCard key={menu.dishName} {...menu} />
        ))}
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
        <RedirectButton redirect="/new-dish" Icon={AddCircleTwoToneIcon} />
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, right: 50 }}>
        {type === "list" ? (
          <RedirectButton redirect="/proposals" Icon={BuildCircleTwoToneIcon} />
        ) : (
          <RedirectButton redirect="/" Icon={RemoveRedEyeTwoToneIcon} />
        )}
      </Box>
    </MainLayout>
  );
}
