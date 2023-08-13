import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";

import { capitalizeFirstLetter } from "@/lib";
import { ProposerNames } from "@/types.d";
import MainLayout from "@/layout/MainLayout";

export default function LoginPage() {
  const [url] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/list");
  };
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
            id="username"
            label="Nombre de usuario"
            name="username"
            margin="dense"
            defaultValue=""
            fullWidth
            required
            select
          >
            {Object.values(ProposerNames).map((name) => (
              <MenuItem value={name} key={name}>
                {capitalizeFirstLetter(name)}
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
