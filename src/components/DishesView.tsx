import { Box, Stack, Typography } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import BuildCircleTwoToneIcon from "@mui/icons-material/BuildCircleTwoTone";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";

import { EditDishCard } from "./EditDishCard";
import { InfoDishCard } from "./InfoDishCard";
import { ListDishesViewProps } from "@/types.d";
import { RedirectButton } from "./RedirectButton";
import MainLayout from "@/layout/MainLayout";
import { useDishes } from "@/hooks/useDishes";

export function DishesView({ title, type }: ListDishesViewProps) {
  const { dishes } = useDishes();
  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Stack width="100%" spacing={1} mb={5}>
        {dishes.map((menu) =>
          type === "list" ? (
            <InfoDishCard key={menu.dishName} {...menu} />
          ) : (
            <EditDishCard key={menu.dishName} {...menu} />
          )
        )}
      </Stack>
      <Box sx={{ position: "fixed", bottom: 35, right: 2 }}>
        <RedirectButton redirect="/new-dish" fontSize="40px" Icon={AddCircleTwoToneIcon} />
      </Box>
      <Box sx={{ position: "fixed", bottom: 35, right: 53 }}>
        {type === "list" ? (
          <RedirectButton redirect="/proposals" fontSize="40px" Icon={BuildCircleTwoToneIcon} />
        ) : (
          <RedirectButton redirect="/list" fontSize="40px" Icon={RemoveRedEyeTwoToneIcon} />
        )}
      </Box>
    </MainLayout>
  );
}
