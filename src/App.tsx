import React from "react";
import "./reset.css";
import Layout from "./components/layout/Layout";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <img
          src="https://cdn.imagin.studio/getImage?&make=audi&modelFamily=a6&customer=img&modelRange=rs6&zoomType=fullscreen"
          alt="mercedes"
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
