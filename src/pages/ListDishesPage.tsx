import { Box, Container, Typography } from "@mui/material";

import { DishCard, AddDishButton } from "@/components";
import { MenuData } from "@/data";

export default function ListDishesPage() {
  return (
    <Container component="main" sx={{ bgcolor: "#91C8E4" }}>
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
    </Container>
  );
}
