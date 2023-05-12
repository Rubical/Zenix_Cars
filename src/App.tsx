import React from "react";
import "./reset.css";
import Layout from "./components/layout/Layout";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import Home from "./screens/Home";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
