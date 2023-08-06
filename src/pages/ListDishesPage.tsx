import { Box, Typography } from "@mui/material";

import { DishCard, AddDishButton } from "@/components";
import { EditProposalsButton } from "@/components/EditProposalsButton";
import { MenuData } from "@/data";
import MainLayout from "@/layout/MainLayout";

export default function ListDishesPage() {
  return (
    <MainLayout>
      <Box display="flex" justifyContent="center" py="5px">
        <Typography variant="h4">Menu Semanal</Typography>
      </Box>
      <Box>
        {MenuData.map((menu) => (
          <DishCard key={menu.dishName} {...menu} />
        ))}
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, right: 0 }}>
        <AddDishButton />
      </Box>
      <Box sx={{ position: "fixed", bottom: 0, right: 50 }}>
        <EditProposalsButton />
      </Box>
    </MainLayout>
  );
}
