import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
    secondary: {
      dark: '#e53935',
      main: '#f44336',
      light: '#ef5350',
    },
  },
});

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
