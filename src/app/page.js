'use client'

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from '../commons/styles/global-style'
import Main from '../containers/Main'
import { ThemeProvider } from "@mui/material/styles";
import theme from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Main />
    </ThemeProvider>
  );
}

export default App;
