import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Routes from './routes';
import { mainTheme } from '~/core/styles/theme';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Routes />
  </ThemeProvider>
);

export default App;
