import MainLayout from "@/layout/MainLayout";
import { capitalizeFirstLetter } from "@/lib";
import { ProposerNames } from "@/types.d";
import { Box, Button, Checkbox, FormControlLabel, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField id="username" label="Nombre de usuario" name="username" margin="dense" fullWidth required select>
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
