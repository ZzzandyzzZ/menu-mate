import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";

import { capitalizeFirstLetter } from "@/lib";
import { ProposerNames } from "@/types.d";
import MainLayout from "@/layout/MainLayout";
import { useSession } from "@/hooks/useSession";
import { useDishes } from "@/hooks/useDishes";
import { MenuData } from "@/data";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { proposerName, setName, setRoomId } = useSession();
  const { setDishesList } = useDishes();
  console.log(import.meta.env);
  console.log(import.meta.env.VITE_USER_PASSWORDS);

  const handleSubmit = () => {
    // if (roomId == null) throw Error("Room not found");
    setDishesList(MenuData);
    navigate("/list");
  };

  useEffect(() => {
    setRoomId(searchParams.get("roomId"));
  }, [searchParams, setRoomId]);

  return (
    <MainLayout>
      <Paper
        elevation={5}
        sx={{
          p: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            id="proposerName"
            label="Nombre de usuario"
            name="proposerName"
            margin="dense"
            value={proposerName}
            onChange={(e) => setName(e.target.value)}
            defaultValue=""
            fullWidth
            required
            select
          >
            {Object.values(ProposerNames).map((proposerName) => (
              <MenuItem value={proposerName} key={proposerName}>
                {capitalizeFirstLetter(proposerName)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="password"
            label="Contraseña"
            margin="dense"
            name="password"
            type="password"
            fullWidth
            required
          />
          <Button type="submit" fullWidth variant="outlined" sx={{ my: 2 }} color="info">
            Ingresar
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
}
