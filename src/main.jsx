import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Routes } from "./routes/index";

import { AuthProvider } from "./hooks/auth";
import { CartProvider } from "./hooks/cart";
import { RequestProvider } from "./hooks/request";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RequestProvider>
        <AuthProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </AuthProvider>
      </RequestProvider>
    </ThemeProvider>
  </React.StrictMode>
);
