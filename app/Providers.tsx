"use client";

import React, { ReactNode } from "react";
import Layout from "../src/components/layout/layout";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import "./globals.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Provider>
  );
}
