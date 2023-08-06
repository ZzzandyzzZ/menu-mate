import { Container, Typography } from "@mui/material";

import { MainLayoutProps } from "@/types";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container component="main" sx={{ bgcolor: "#91C8E4" }}>
      {children}
      <Typography variant="h6" textAlign="center">
        Menu Mate
      </Typography>
    </Container>
  );
}
