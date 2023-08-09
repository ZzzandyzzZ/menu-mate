import { Box, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#91C8E4",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h5" style={{ color: "white" }}>
        La página que estas buscando no existe
      </Typography>
    </Box>
  );
}
