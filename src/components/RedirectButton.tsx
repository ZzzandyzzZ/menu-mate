import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import { RedirectButtonProps } from "@/types.d";

export function RedirectButton({ redirect, Icon }: RedirectButtonProps) {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => {
        navigate(redirect);
      }}
      sx={{ fontSize: "50px" }}
    >
      <Icon fontSize="inherit" />
    </IconButton>
  );
}
