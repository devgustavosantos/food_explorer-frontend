import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { New } from "./pages/New";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Order } from "./pages/Order";
import { AllOrders } from "./pages/AllOrders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AllOrders />
    </ThemeProvider>
  </React.StrictMode>
);
