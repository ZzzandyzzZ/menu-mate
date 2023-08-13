import { Box, Container, Typography } from "@mui/material";

import { MainLayoutProps } from "@/types";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container
      sx={{
        bgcolor: "#91C8E4",
      }}
    >
      <Box
        component="main"
        sx={{
          bgcolor: "#91C8E4",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
        <Box position="fixed" bottom={0} zIndex={2} bgcolor="gray" left={0} right={0}>
          <Typography variant="h6" textAlign="center">
            Menu Mate
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
