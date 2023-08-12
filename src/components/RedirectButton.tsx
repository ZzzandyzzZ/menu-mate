import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import { RedirectButtonProps } from "@/types.d";

export function RedirectButton({ redirect, fontSize, disabled = false, Icon }: RedirectButtonProps) {
  const navigate = useNavigate();

  return (
    <IconButton
      size="small"
      onClick={() => {
        navigate(redirect);
      }}
      disabled={disabled}
      sx={{ fontSize, bgcolor: "rgba(255, 255, 255, 0.45)" }}
    >
      <Icon fontSize="inherit" />
    </IconButton>
  );
}
