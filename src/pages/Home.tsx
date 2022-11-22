import * as React from "react";
import { Header, Sidebar } from "features";
import { Box, Typography } from "@mui/material";

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Sidebar />
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
    </>
  );
};
