import React from 'react';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme';

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
