import { useNavigate } from "react-router-dom";

import { Card, CardActionArea, Grid, IconButton } from "@mui/material";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import LockTwoTone from "@mui/icons-material/LockTwoTone";

import { type DishCardProps } from "@/types.d";
import { DishCardData } from "./DishCardData";
import { useDishes } from "@/hooks/useDishes";

export function EditDishCard({ dayOfWeek, proposerName, dishName, id, accepted }: DishCardProps) {
  const navigate = useNavigate();
  const { setCurrentDish, toggleAcceptedDish } = useDishes();

  const onDishCardClick = () => {
    if (accepted) return;
    setCurrentDish({ dayOfWeek, proposerName, dishName, id, accepted });
    navigate("/edit-dish");
  };

  return (
    <Card elevation={5} sx={{ p: 1, bgcolor: accepted ? "#C6E5B1" : "#f9c1be" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={9} textAlign="left">
          <CardActionArea onClick={onDishCardClick} disabled={accepted}>
            <DishCardData dayOfWeek={dayOfWeek} proposerName={proposerName} dishName={dishName} />
          </CardActionArea>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <IconButton
            onClick={() => {
              toggleAcceptedDish(id);
            }}
            sx={{ fontSize: "22px", bgcolor: "rgba(255, 255, 255, 0.45)" }}
          >
            {accepted ? <LockTwoTone fontSize="inherit" /> : <LockOpenTwoToneIcon fontSize="inherit" />}
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}
