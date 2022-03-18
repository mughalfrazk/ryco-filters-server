import AppRouter from './router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useUser } from './hooks/useUser';
import { UserContext } from './context/user-context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e41e26',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#949293',
      contrastText: '#ffffff',
    },
    white: {
      main: '#ffffff',
      contrastText: '#e41e26',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          paddingTop: 5,
          paddingBottom: 3,
          paddingRight: 20,
          paddingLeft: 20,
        },
      },
    },
  },
});

const App = () => {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
