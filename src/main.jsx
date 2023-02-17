import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import { CartProvider } from './hooks/cart';
import { MealsProvider } from './hooks/meals';
import { RequestProvider } from './hooks/request';
import { Routes } from './routes/index';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RequestProvider>
        <AuthProvider>
          <CartProvider>
            <MealsProvider>
              <Routes />
            </MealsProvider>
          </CartProvider>
        </AuthProvider>
      </RequestProvider>
    </ThemeProvider>
  </React.StrictMode>
);
