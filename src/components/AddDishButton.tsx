import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function AddDishButton() {
  const handleClick = () => {};
  return (
    <IconButton size="large" onClick={handleClick}>
      <AddCircleOutlineIcon fontSize="large" />
    </IconButton>
  );
}
