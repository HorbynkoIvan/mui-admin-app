import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Header, Sidebar } from "features";

export default function App(): JSX.Element {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Header />
        <Sidebar />
        <Typography variant="h1" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Typography variant="test" component="p" gutterBottom>
          Create React App example with TypeScript
        </Typography>
      </Box>
    </Container>
  );
}
