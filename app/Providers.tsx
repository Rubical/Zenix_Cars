"use client";

import React, { ReactNode } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import "./reset.css";

const muiTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </Provider>
  );
}
