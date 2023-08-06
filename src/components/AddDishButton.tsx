import { IconButton } from "@mui/material";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { useNavigate } from "react-router-dom";

export function AddDishButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-dish", { replace: true });
  };
  return (
    <IconButton onClick={handleClick} sx={{ fontSize: "50px" }}>
      <AddCircleTwoToneIcon fontSize="inherit" />
    </IconButton>
  );
}
