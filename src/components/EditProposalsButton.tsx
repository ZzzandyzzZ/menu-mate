import { IconButton } from "@mui/material";
import BuildCircleTwoToneIcon from "@mui/icons-material/BuildCircleTwoTone";
import { useNavigate } from "react-router-dom";

export function EditProposalsButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/proposals");
  };
  return (
    <IconButton onClick={handleClick} sx={{ fontSize: "50px" }}>
      <BuildCircleTwoToneIcon fontSize="inherit" />
    </IconButton>
  );
}
